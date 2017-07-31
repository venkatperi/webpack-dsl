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
          let child = new Node( k, {
            parent: node,
            description: s.description
          } );
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

    any( s, node, visited = [] ) {
      switch ( s.instanceof ) {
        case 'Function':
          new Node( '<function>', { parent: node, isTerminal: true } );
          break;

        case 'RegExp':
          new Node( '<regexp>', { parent: node, isTerminal: true } );
          break;
      }
    }
  } )

  return walk;
}

//remove nodes with circular refs

function removeCircular( node ) {
  node.walk( {
    beforeChildren( n ) {
      _.remove( n.children, ( x ) => x.isCircular );
    }
  } );
}

function reduceArrays( root ) {
  root.walk( {
    beforeChildren( node ) {
      if ( node.children.length === 1 &&
        node.children[ 0 ].name === '<array>' ) {
        node.originalName = node.name;
        node.name = pluralize.singular( node.name );
        node.factory = node.children[ 0 ].factory;
        node.isArray = true;
        node.children = node.children[ 0 ].children;
      }
    }
  } );
}

function removeTerminals( root ) {
  root.walk( {
    afterChildren( node ) {
      prevLength = node.children.length;
      _.remove( node.children, ( c ) => c.isTerminal );

      if ( node.children.length === 0 ) {
        if ( prevLength > node.children.length )
          node.factory = "leaf";

        if ( node.name === '<array>' )
          node.isTerminal = true;
      }
    }
  } )
}

function removeArrays( root ) {
  root.walk( {
    beforeChildren( node ) {
      _.remove( node.children, ( c ) => c.name === '<array>' );
    }
  } );
}

function removeRecursion( root ) {
  root.walk( {
    beforeChildren( node ) {
      _.remove( node.children, ( c ) => c.name === node.name );
    }
  } );
}

function conditions( root ) {
  root.walk( {
    beforeChildren( node ) {
      if ( _.isEqual(
          _.map( node.children, ( c ) => c.name ), [ 'and', 'not', 'or' ] ) ) {
        node.factory = 'ConditionFactory';
        node.children = [];
      }
    }
  } );
}

function ruleSetUse( root ) {
  root.walk( {
    beforeChildren( node ) {
      if ( _.isEqual( _.map(
          node.children, ( c ) => c.name ), [ 'loader', 'options', 'query' ] ) ) {
        node.factory = 'UseFactory';
        node.children = [];
      }
    }
  } );
}

module.exports = {
  createWalk,
  removeCircular,
  reduceArrays,
  removeTerminals,
  removeArrays,
  removeRecursion
}
