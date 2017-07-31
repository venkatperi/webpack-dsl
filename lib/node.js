'use strict'

const _ = require( 'lodash' );

function nop() {}

class Node {
  constructor( name, opts = {} ) {
    this.name = name;
    this.children = [];

    _.forOwn( opts, ( v, k ) => this[ k ] = v );
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
    let res = [ this.name ];
    if ( this.isArray )
      res.push( 'isArray' );
    if ( this.originalName )
      res.push( this.originalName );
    if ( this.factory )
      res.push( this.factory );

    return res.join( ', ' );
  }

  walk( visitor = {} ) {
    ( visitor.beforeChildren || nop )( this );
    this.children.forEach( ( c ) => c.walk( visitor ) );
    ( visitor.afterChildren || nop )( this );
  }
}

module.exports = Node;
