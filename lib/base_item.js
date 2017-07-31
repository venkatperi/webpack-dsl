'use strict'

const _ = require( 'lodash' );
const { inspect } = require( 'util' );
const asciiTree = require( './ascii_tree' );

function nop() {}

class BaseItem {
  constructor( opts, args ) {
    opts = opts || {};
    this._type = opts.type;
    if ( Array.isArray( args ) && args.length === 0 )
      args = null;
    this._args = args;
    this.children = []
    this.parent = null;
  }

  get args() {
    return this._args;
  }

  get type() {
    return this._type;
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

  toString() {
    let res = [ this._type ];
    if ( this.args )
      res.push( _.truncate( inspect( this.args ) ) );
    return res.join( ', ' );
  }

  toAsciiTree() {
    return asciiTree( this );
  }
}

module.exports = BaseItem;
