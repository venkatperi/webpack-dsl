const _ = require( 'lodash' );
const { templates } = require( './hbr' );
const fs = require( 'fs' );
const path = require( 'path' );
const pluralize = require( 'pluralize' );
const createVisitor = require( 'json-schema-visitor' )
const asciiTree = require( './ascii_tree' )
const Node = require( './node' )
const { createWalk, removeCircular, reduceArrays, removeTerminals, removeArrays, removeRecursion } = require( './schema2ast' );

const schema = require( '../webpackOptionsSchema.json' );

let refs = {
  '#/definitions/ruleSet-condition': { factory: 'ConditionFactory' },
  '#/definitions/ruleSet-rule': { factory: 'RuleFactory' },
  '#/definitions/ruleSet-use-item': { factory: 'UseItemFactory' }
};

let walk = createWalk( schema, refs );

function cleanup( root ) {
  removeCircular( root );
  reduceArrays( root );
  removeTerminals( root );
  reduceArrays( root ); //final reduce

  //ok to remove all arrays now
  removeArrays( root );
  removeRecursion( root );
  return root;
}

function ast( name, start ) {
  let root = new Node( name );
  walk( start, root );
  cleanup( root );
  return root;
}

function definition( name ) {
  let root = ast( name, schema.definitions[ name ] );
  console.log( asciiTree( root ) );
}

definition( 'ruleSet-condition' );
definition( 'ruleSet-use-item' );
definition( 'ruleSet-rule' );

let root = ast( 'webpack', schema );
console.log( asciiTree( root ) );


