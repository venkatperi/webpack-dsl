const _ = require( 'lodash' );
const { templates } = require( './hbr' );
const schema = require( '../webpackOptionsSchema.json' );
const fs = require( 'fs' );
const path = require( 'path' );
const pluralize = require( 'pluralize' );
const createVisitor = require( 'json-schema-visitor' )
const asciiTree = require( './ascii_tree' )

const genRoot = path.join( __dirname );

function capitalize( s ) {
  return s.charAt( 0 ).toUpperCase() + s.slice( 1 );
}

let classes = {};

function gen( schema, path ) {
  if ( !schema ) return [];

  let parts = path.split( '.' );
  let name = parts[ parts.length - 1 ];
  let parent = parts.length > 1 ? parts[ parts.length - 2 ] : null;

  //name exists
  if ( classes[ name ] ) {
    let base = name;
    name = null;
    for ( let i = 1; i < 100; i++ ) {
      let n = `${base}${i}`;
      if ( !classes[ n ] ) {
        name = n;
        break;
      }
    }
    if ( !name )
      throw new Error( "unable to create a unique name for " + path );
  }

  classes[ name ] = {
    path: path,
    name: name,
    className: capitalize( name ),
    members: [],
    isObject: schema.type === 'object',
    description: `${path}: ` +
      ( schema.description ? schema.description : '' )
  };

  paths[ path ] = name;

  if ( parent ) {
    classes[ parent ].members.push( name );
  }

  //let members = _.map( schema.properties, ( v1, k1 ) => k1 );
  return [];

  return [ 'class', 'factory' ].map(
    ( x ) => templates[ x ]( {
      name: name,
      path: path,
      className: capitalize( name ),
      isObject: schema.type === 'object',
      members: members,
      description: `${path}: ` +
        ( schema.description ? schema.description : '' )
    } ) )
}

function nop() {}

function walk( schema, path, visitor, visited = [] ) {
  let parts = path.split( '.' );
  let name = parts[ parts.length - 1 ];

  if ( schema.type === 'array' ) {
    let singular = pluralize.singular( name );
    parts.pop();
    parts.push( singular );
    path = parts.join( '.' );
    schema = schema.items
  }

  if ( !schema ) return;
  if ( visited.indexOf( name ) >= 0 )
    return;

  console.log( path );

  let idx = _.find( [ 'allOf', 'oneOf', 'anyOf' ], ( x ) => schema[ x ] );
  if ( idx ) {
    schema[ idx ].forEach( ( a ) =>
      walk( a, path, visitor, visited ) );
    return;
  }

  //visit first
  visitor.visit( schema, path );

  _.forOwn( schema.properties, ( v, k ) => {
    if ( name != k )
      walk( v, `${path}.${k}`, visitor, visited.concat( name ) )
  } )

}

function genSource( schema, path ) {
  let res = []
  walk( schema, path, {
    visit: ( s, p ) => {
      //res.push( gen( s, p ) )
      //console.log( p );
    }
  } );
  return _.flatten( res );
}

class Node {
  constructor( name, opts = {} ) {
    this.name = name;
    this.children = [];

    this.isTerminal = opts.isTerminal;
    this.parent = opts.parent;
    this.path = ( this.parent ? `${this.parent.path}.` : '' ) + name;
    if ( this.parent ) {
      this.parent.addChild( this );
    }
  }

  addChild( c ) {
    this.children.push( c );
    c.parent = this;
    return c;
  }

  removeChild( c ) {
    let idx = this.children.indexOf( c );
    if ( idx >= 0 ) {
      this.children.splice( idx, 1 );
    }
  }

  toString() {
    return this.name;
  }
}

const walk2 = createVisitor( {

  object( s, node, visited = [] ) {
    if ( s.properties )
      _.forOwn( s.properties, ( v, k ) => {
        let child = new Node( k, { parent: node } );
        walk2( v, child, visited );
      } );
    else
      new Node( '<object>', { parent: node, isTerminal: true } );
  },

  ref( s, node, visited = [] ) {
    let ref = s[ '$ref' ];
    if ( visited.indexOf( ref ) >= 0 ) {
      node.isCircular = true;
      return;
    }
    walk2( deref( schema, ref ), node, visited.concat( ref ) )
  },

  array( s, node, visited = [] ) {
    node = new Node( '<array>', { parent: node } );
    if ( s.items )
      walk2( s.items, node, visited )
  },

  allOf( s, node, visited = [] ) {
    s.allOf.forEach( c => walk2( c, node, visited ) )
  },

  anyOf( s, node, visited = [] ) {
    s.anyOf.forEach( c => walk2( c, node, visited ) )
  },

  oneOf( s, node, visited = [] ) {
    s.oneOf.forEach( c => walk2( c, node, visited ) )
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

let root = new Node( 'root' );
walk2( schema.definitions['ruleSet-condition'], root );

removeCircular( root );
reduceArrays( root );
removeTerminals( root );
reduceArrays( root ); //final reduce

//ok to remove all arrays now
removeArrays( root );

removeRecursion( root );

//conditions( root );
//ruleSetUse( root );

console.log( asciiTree( root ) );

return;

$RefParser.dereference( schema ).then( ( s ) => {

  walk2( s, 'webpack', () => {} );
  return;

  let res = [ "// Generated source file" ];
  res.push( 'const BaseItem = require("./base_item");' );
  res.push( " const { FactoryBuilderSupport, AbstractFactory } = require( 'node-factory-builder' );" );

  res = res.concat( genSource( s, 'webpack' ) );
  res.push( 'module.exports = {' )
  res.push( '  WebpackBuilder' )
  res.push( '}' )

  //fs.writeFileSync( path.join( genRoot, 'factories.js' ), res.join( '\n' ) );
  console.log( classes );

} ).catch( console.log );
