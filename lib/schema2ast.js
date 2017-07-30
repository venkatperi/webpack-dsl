const _ = require( 'lodash' );
const pluralize = require( 'pluralize' );
const createVisitor = require( 'json-schema-visitor' )
const Node = require( './node' );
const deref = require( './deref' );

function createWalk( schema, refs ) {

  const walk = createVisitor( {

    object( s, node, visited = [] ) {
      if ( s.properties )
        _.forOwn( s.properties, ( v, k ) => {
          let child = new Node( k, { parent: node } );
          walk( v, child, visited );
        } );
      else
        new Node( '<object>', { parent: node, isTerminal: true } );
    },

    ref( s, node, visited = [] ) {
      let ref = s[ '$ref' ];
      if ( refs[ ref ] ) {
        node.factory = refs[ ref ].factory;
        return;
      }

      if ( visited.indexOf( ref ) >= 0 ) {
        node.isCircular = true;
        return;
      }

      walk( deref( schema, ref ), node, visited.concat( ref ) )
    },

    array( s, node, visited = [] ) {
      node = new Node( '<array>', { parent: node } );
      if ( s.items )
        walk( s.items, node, visited )
    },

    allOf( s, node, visited = [] ) {
      s.allOf.forEach( c => walk( c, node, visited ) )
    },

    anyOf( s, node, visited = [] ) {
      s.anyOf.forEach( c => walk( c, node, visited ) )
    },

    oneOf( s, node, visited = [] ) {
      s.oneOf.forEach( c => walk( c, node, visited ) )
    },

    enum( s, node, visited = [] ) {
      new Node( '<enum>', { parent: node, isTerminal: true } );
    },

    boolean( s, node, visited = [] ) {
      new Node( '<boolean>', { parent: node, isTerminal: true } );
    },

    number( s, node, visited = [] ) {
      new Node( '<number>', { parent: node, isTerminal: true } );
    },

    string( s, node, visited = [] ) {
      new Node( '<string>', { parent: node, isTerminal: true } );
    },

    any( s, node, visited = [] ) {}
  } )

  return walk;
}

//remove nodes with circular refs

function removeCircular( node ) {
  let list = []
  node.children.forEach( ( c ) => {
    if ( !c.isCircular )
      list.push( c );
  } );
  node.children = list;
  list.forEach( removeCircular );
}

function reduceArrays( node ) {
  if ( node.children.length === 1 &&
    node.children[ 0 ].name === '<array>' ) {
    node.originalName = node.name;
    node.name = pluralize.singular( node.name );
    node.isArray = true;
    node.children = node.children[ 0 ].children;
  }
  node.children.forEach( reduceArrays );
}

function removeTerminals( node ) {
  node.children.forEach( removeTerminals );

  let list = []
  node.children.forEach( ( c ) => {
    if ( !c.isTerminal )
      list.push( c );
  } )
  node.children = list;

  if ( node.name === '<array>' && node.children.length === 0 ) {
    node.isTerminal = true;
  }
}

function removeArrays( node ) {
  let list = []
  node.children.forEach( ( c ) => {
    if ( c.name !== '<array>' )
      list.push( c );
  } )
  node.children = list;
  node.children.forEach( removeArrays );
}

function removeRecursion( node ) {
  let list = []
  node.children.forEach( ( c ) => {
    if ( c.name !== node.name )
      list.push( c );
  } )
  node.children = list;
  node.children.forEach( removeRecursion );
}

function conditions( node ) {
  if ( _.isEqual(
      _.map( node.children, ( c ) => c.name ), [ 'and', 'not', 'or' ] ) ) {
    node.factory = 'ConditionFactory';
    node.children = [];
  } else
    node.children.forEach( conditions );
}

function ruleSetUse( node ) {
  if ( _.isEqual(
      _.map( node.children, ( c ) => c.name ), [ 'loader', 'options', 'query' ] ) ) {
    node.factory = 'UseFactory';
    node.children = [];
  } else
    node.children.forEach( ruleSetUse );
}

module.exports = {
  createWalk,
  removeCircular,
  reduceArrays,
  removeTerminals,
  removeArrays,
  removeRecursion
}
