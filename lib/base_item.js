'use strict'

const _ = require( 'lodash' );
const { inspect } = require( 'util' );
const asciiTree = require( './ascii_tree' );

function nop() {}

class BaseItem {
  constructor( opts, args ) {
    opts = opts || {};
    this.__type = opts.type;
    if ( Array.isArray( args ) && args.length === 0 )
      args = null;
    this._args = args;
    this.children = []
    this.parent = null;
  }

  get args() {
    return this._args;
  }

  set args( v ) {
    this._args = v;
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
    ( visitor.beforeChildren || nop )( this );
    this.children.forEach( ( c ) => c.walk( visitor ) );
    ( visitor.afterChildren || nop )( this );
  }

  toString() {
    let res = [ this.__type ];
    if ( this.args )
      res.push( _.truncate( inspect( this.args ) ) );
    return res.join( ', ' );
  }

  toAsciiTree() {
    return asciiTree( this );
  }
}

module.exports = BaseItem;
