'use strict'

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
    let res = [this.name];
    if (this.isArray) 
      res.push('isArray');
    if (this.originalName) 
      res.push(`originalName: ${this.originalName}`);
    if (this.factory) 
      res.push(`factory: ${this.factory}`);
    
    return res.join(', ');
  }
}

module.exports = Node;
