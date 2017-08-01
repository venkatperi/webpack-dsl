const _ = require( 'lodash' );
const SchemaNode = require( './schema_node' )
const ast = require( './ast' );
const schema = require( '../../schema/webpackOptionsSchema.json' );
const gen = require( './gen' );
const { sortByKeys } = require( '../util' );
const { templates } = require( './templates' );

let refs = {
  '#/definitions/ruleSet-condition': { name: 'condition', factory: 'condition' },
  '#/definitions/ruleSet-rule': { name: 'rule', factory: 'rule' },
  '#/definitions/ruleSet-use-item': { name: 'useItem', factory: 'useItem' }
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
  let root = new SchemaNode( name );
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

function generate() {

  let code = {
    classes: {},
    classesExt: {},
    factories: {},
    builders: {}
  }

  let definitions = processDefinitions();
  definitions.forEach( ( d ) => console.log( d.toAsciiTree() ) );

  _.forOwn( definitions, ( v, k ) => {
    gen.genRef( v, code );
  } );

  let webpack = process( 'webpack', schema );
  console.log( webpack.toAsciiTree() );

  gen.gen( webpack, code );

  let src = [];
  src.push( templates.header() );
  src = src.concat( _.flatten(
    _.map( [ 'classesExt', 'factories', 'builders' ], ( t ) =>
      _.map( sortByKeys( code[ t ] ), ( v1, k1 ) => v1 ) ) ) )
  src.push( templates.footer() );

  let classes = [];
  classes.push( "const _ = require( 'lodash' );\n" );
  classes.push( "const ConfigNode = require( './config_node' );\n" )
  classes.push( "const { type, scalar, extend } = require( './util' );\n\n" )

  classes = classes.concat(
    _( code.classes )
    .pickBy( ( x ) => !x.empty )
    .map( ( v1, k1 ) => v1.code )
    .value() );

  classes.push( 'module.exports = {\n' );
  classes.push( _.map( code.classes ,
      ( v, k ) => {
        let str = `  ${k}Node: `;
        str += v.empty ? "class extends ConfigNode {}" : `${k}Node`;
        return str;
      }
    )
    .join( ',\n' ) );
  classes.push( '}\n' )
  return {
    builder: src.join( '' ),
    classes: classes.join( '' )
  }
}

module.exports = generate
