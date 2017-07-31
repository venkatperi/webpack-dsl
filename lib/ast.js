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
    beforeChildren() {
      _.remove( this.children, ( x ) => x.isCircular );
    }
  } );
}

function reduceArrays( root ) {
  root.walk( {
    beforeChildren() {
      if ( this.children.length === 1 &&
        this.children[ 0 ].name === '<array>' ) {
        this.originalName = this.name;
        this.name = pluralize.singular( this.name );
        this.factory = this.children[ 0 ].factory;
        this.isArray = true;
        this.children = this.children[ 0 ].children;
      }
    }
  } );
}

function removeTerminals( root ) {
  root.walk( {
    afterChildren() {
      prevLength = this.children.length;
      _.remove( this.children, ( c ) => c.isTerminal );

      if ( this.children.length === 0 ) {
        if ( prevLength > this.children.length )
          this.factory = "leaf";

        if ( this.name === '<array>' )
          this.isTerminal = true;
      }
    }
  } )
}

function removeArrays( root ) {
  root.walk( {
    beforeChildren() {
      _.remove( this.children, ( c ) => c.name === '<array>' );
    }
  } );
}

function removeRecursion( root ) {
  root.walk( {
    beforeChildren() {
      _.remove( this.children, ( c ) => this.path.split( '.' ).indexOf( c.name ) >= 0 );
    }
  } );
}

function conditions( root ) {
  root.walk( {
    beforeChildren() {
      if ( _.isEqual(
          _.map( this.children, ( c ) => c.name ), [ 'and', 'not', 'or' ] ) ) {
        this.factory = 'ConditionFactory';
        this.children = [];
      }
    }
  } );
}

function ruleSetUse( root ) {
  root.walk( {
    beforeChildren() {
      if ( _.isEqual( _.map(
          this.children, ( c ) => c.name ), [ 'loader', 'options', 'query' ] ) ) {
        this.factory = 'UseFactory';
        this.children = [];
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
