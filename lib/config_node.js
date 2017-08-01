'use strict'

const _ = require( 'lodash' );
const { inspect } = require( 'util' );
const asciiTree = require( './util/ascii_tree' );
const { type, scalar, extend } = require( './util' );

function nop( x ) { return x; }

function _extend( context, node ) {
  let args = scalar( node.args );
  let t1 = type( context.entry )
  let t2 = type( args )
  if ( context.entry ) {
    if ( ( t1 === 'object' && ( t2 === 'string' || t2 === 'array' ) ) ||
      ( t1 === 'array' && t2 === 'object' ) )
      throw new Error( `incompatible entry: ${t1} vs ${t2}` );
  }
  if ( t1 === 'object' ) {
    extend( context, args, 'entry' );
  } else if ( !context.entry ) {
    context.entry = args;
  } else {
    switch ( t1 ) {
      case 'string':
        context.entry = [ context.entry ];
        break;
    }
    context.entry = _.flatten( context.entry.concat( args ) );
  }
  return context;
}

function _replace( context, node ) {
  _.set( context, node.path, scalar( node.args ) );
  return context;
}

class ConfigNode {
  constructor( opts, args ) {
    opts = opts || {};
    this._name = opts.name;
    if ( Array.isArray( args ) && args.length === 0 )
      args = null;
    this._args = args;
    this.children = []
    this.parent = null;
    this.value = {};
  }

  get path() {
    if ( this._path ) return this._path;
    let parts = []
    if ( this.parent ) {
      parts.push( this.parent.path );
    }
    parts.push( this.name );
    return parts.join( '.' );
  }

  get args() {
    return this._args;
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  get name() {
    return this._name;
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

  walk( visitor = {} ) {
    ( visitor.beforeChildren || nop ).call( null, this );
    this.children.forEach( ( c ) => c.walk( visitor ) );
    return ( visitor.afterChildren || nop ).call( null, this );
  }

  evaluate( ...args ) {
    args = args.length ? args : this.isLeaf ? this.args : this.value;
    args = Array.isArray( args ) ? args : [ args ];
    let parent = this.parent;
    if ( parent ) {
      let handler = parent[ this.name ] || parent._handler;
      if ( typeof handler === 'function' ) {
        handler.apply( parent, args );
      }
    }
    return this.value;
  }

  _handler( args, path ) {
    extend( this.value, args, path );
  }

  toString() {
    let res = [ this.name ];
    res.push( this.constructor.name );
    res.push( this.path );
    if ( this.args )
      res.push( _.truncate( inspect( this.args ) ) );

    return res.join( ', ' );
  }

  toAsciiTree() {
    return asciiTree( this );
  }
}

module.exports = ConfigNode;
