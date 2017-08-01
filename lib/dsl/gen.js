const _ = require( 'lodash' );
const { templates } = require( './templates' );
const pluralize = require( 'pluralize' );
const { classCase } = require( '../util' );
const { sanitizeName } = require( '../util/sanitize' );

function _data( node, name = 'name' ) {
  let path = node.path.split( '.' );
  if ( path[ 0 ] === 'webpack' ) {
    path.shift();
    path = path.join( '.' );
  } else path = null;

  return {
    factory: node.factory,
    //name: node[ name ],
    name: node.name,
    path: path,
    fullPath: node.path,
    members: node.members,
    isLeaf: node.isLeaf
  }
}

function genRef( node, code ) {
  let data = _data( node, 'factory' );
  code.classes[ node.factoryClass ] = {
    code: templates[ 'class' ]( data ),
    empty: !data.members
  }
  code.classesExt[ node.factoryClass ] = templates[ 'classExt' ]( data );
  code.factories[ node.factoryClass ] = templates[ 'factory' ]( data );
  code.builders[ node.factory ] = templates[ 'builder' ]( data );

  gen( node, code );
  return code;
}

function _gen( node, code ) {
  let data = _data( node );

  if ( !code.classes[ node.className ] ) {
    code.classes[ node.className ] = {
      code: templates[ 'class' ]( data ),
      empty: !data.members
    };
    code.classesExt[ node.className ] = templates[ 'classExt' ]( data );
  }

  if ( !code.factories[ node.factoryClass ] )
    code.factories[ node.factoryClass ] = templates[ 'factory' ]( data );

  if ( !node.isLeaf ) {
    if ( node.members && !code.builders[ node.factory ] )
      code.builders[ node.factory ] = templates[ 'builder' ]( data );
  }

  return code;
}

function gen( root, code ) {
  _.flatten( [ root ] ).forEach( ( f ) =>
    f.walk( {
      afterChildren() {
        _gen( this, code );
      }
    } )
  );
  return code
}

module.exports = {
  genRef,
  gen
}
