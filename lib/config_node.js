'use strict'

const _ = require( 'lodash' );
const { inspect } = require( 'util' );
const asciiTree = require( './util/ascii_tree' );

function nop() {}

class ConfigNode {
  constructor( opts, args ) {
    opts = opts || {};
    this._name = opts.name;
    if ( Array.isArray( args ) && args.length === 0 )
      args = null;
    this._args = args;
    this.children = []
    this.parent = null;
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

  walk( visitor = {}, ...args ) {
    ( visitor.beforeChildren || nop ).call( null, this, ...args );
    this.children.forEach( ( c ) => c.walk( visitor, ...args ) );
    ( visitor.afterChildren || nop ).call( null, this, ...args );
  }

  evaluate( context ) {
    return context; 
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
