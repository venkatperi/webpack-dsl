const _ = require( 'lodash' );
const Node = require( './node' )
const ast = require( './ast' );
const schema = require( '../webpackOptionsSchema.json' );
const gen = require( './gen' );
const { templates } = require( './hbr' );

let refs = {
  '#/definitions/ruleSet-condition': { factory: 'condition' },
  '#/definitions/ruleSet-rule': { factory: 'rule' },
  '#/definitions/ruleSet-use-item': { factory: 'useItem' }
};

function cleanupSchemaTree( root ) {
  ast.removeCircular( root );
  ast.reduceArrays( root );
  ast.removeTerminals( root );
  ast.reduceArrays( root ); //final reduce

  //ok to remove all arrays now
  ast.removeArrays( root );
  ast.removeRecursion( root );
  return root;
}

const walkSchema = ast.createWalk( schema, refs );

function process( name, start ) {
  let root = new Node( name );
  walkSchema( start, root );
  return cleanupSchemaTree( root );
}

function processDefinition( name, root ) {
  return process( name, schema.definitions[ name ] );
}

function processDefinitions() {
  return _.map( refs, ( v, k ) => {
    let parts = k.split( '/' );
    let d = processDefinition( parts[ parts.length - 1 ] );
    d.factory = v.factory;
    return d;
  } );
}

function getFactories( forest ) {
  let factories = {}
  forest.forEach( ( d ) => {
    d.walk( {
      afterChildren( n ) {
        if ( n.factory && !factories[ n.factory ] )
          factories[ n.factory ] = n;
      }
    } );
  } );
  return factories;
}

function generateSources() {
  let webpack = process( 'webpack', schema );

  let code = {
    classes: {},
    factories: {},
    builders: {}
  }

  _.forOwn( processDefinitions(), ( v, k ) => {
    gen.genRef( v, code );
  } );

  gen.gen2( webpack, code );

  let src = [];
  src.push( templates.header() );
  src = src.concat( _.flatten(
    _.map( code, ( v, k ) =>
      _.map( v, ( v1, k1 ) => v1 ) ) ) )

  src.push( templates.footer() );
  return src.join( '' );
}

module.exports = {
  generateSources
}
