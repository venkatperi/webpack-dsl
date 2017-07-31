const _ = require( 'lodash' );
const { templates } = require( './hbr' );
const pluralize = require( 'pluralize' );
const { classCase } = require( './util' );

function genClass( node ) {
  return templates[ 'class' ]( {
    name: node.name,
    description: node.description,
    factory: node.factory
  } )
}

function genRef( node, code ) {
  node.factory = node.factory || node.name;
  let members = _.map( node.children, ( c ) => {
    return {
      name: c.name,
      factory: node.factory
    }
  } );

  let data = {
    factory: node.factory,
    name: node.factory,
    members: members.length === 0 ? null : members,
    isLeaf: node.factory === 'leaf'
  }

  let cname = classCase( node.factory );
  code.classes[ cname ] = templates[ 'class' ]( data );
  code.factories[ node.factory ] = templates[ 'factory' ]( data );
  code.builders[ node.factory ] = templates[ 'builder' ]( data );

  return code;
}

function genBuilder( node ) {
  let members = _.map( node.children, ( c ) => c.name );
  if ( members.length === 0 )
    return '';

  return templates[ 'builder' ]( {
    name: node.name,
    members: members
  } );
}

function gen( node ) {
  let code = [];
  code.push( genClass( node ) );
  code.push( genFactory( node ) );
  code.push( genBuilder( node ) );
  return code.join( '' );
}

function _gen2( node, code ) {
  node.factory = node.factory || node.name;
  let members = _.map( node.children, ( c ) => {
    let memberName = c.name;
    switch ( c.name ) {
      case 'module':
        memberName = 'module$';
        break;
    }
    return {
      name: memberName, 
      factory: c.factory
    }
  } );

  let data = {
    factory: node.factory,
    name: node.name,
    members: members.length === 0 ? null : members,
    isLeaf: node.factory === 'leaf'
  };

  let cname = classCase( node.name );
  if ( !code.classes[ cname ] )
    code.classes[ cname ] = templates[ 'class' ]( data );

  if ( node.factory !== 'leaf' ) {
    if ( !code.factories[ node.factory ] )
      code.factories[ node.factory ] = templates[ 'factory' ]( data );
    if ( members.length && !code.builders[ node.factory ] )
      code.builders[ node.factory ] = templates[ 'builder' ]( data );
  }

  return code;
}

function gen2( root, code ) {
  _.flatten( [ root ] ).forEach( ( f ) =>
    f.walk( {
      afterChildren( n ) {
        _gen2( n, code );
      }
    } )
  );
  return code
}

function genClasses( root, code ) {
  _.flatten( [ root ] ).forEach( ( f ) =>
    f.walk( {
      afterChildren( n ) {
        if ( !code.classes[ n.name ] ) {
          code.classes[ n.name ] = genClass( n );
        }
      }
    } ) );

  return code;
}

module.exports = {
  genClass,
  genClasses,
  genRef,
  genBuilder,
  gen2
}
