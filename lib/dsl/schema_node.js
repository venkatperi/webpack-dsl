'use strict'

const _ = require( 'lodash' );
const asciiTree = require( '../util/ascii_tree' );
const { sanitizeName } = require( '../util/sanitize' );
const { classCase } = require( '../util' );

function nop( arg ) { return arg; }

class Node {
  constructor( name, opts = {} ) {
    this.name = sanitizeName(name);
    this._children = [];

    _.forOwn( opts, ( v, k ) => this[ k ] = v );
    if ( this.parent ) {
      this.parent.addChild( this );
    }
  }

  //get isLeaf() { return this.factory === 'leaf' }

  get className() {
    return classCase( this.name );
  }

  get factoryClass() {
    return classCase( this.factory );
  }

  get factory() {
    return this._factory || this.name;
  }

  set factory( v ) {
    this._factory = v;
    this._dirty();
  }

  get path() {
    //if ( !this._path )
    return ( this.parent ? `${this.parent.path}.` : '' ) + this.name;
    //return this._path;
  }

  get children() {
    return this._children;
  }

  set children( v ) {
    this._children = v;
    this._dirty()
  }

  _dirty() {
    this._members = null
    this._path = null;
  }

  addChild( c ) {
    this.children.push( c );
    c.parent = this;
    this._dirty();
    return c;
  }

  removeChild( c ) {
    let idx = this.children.indexOf( c );
    if ( idx >= 0 ) {
      this.children.splice( idx, 1 );
    }
    this._dirty()
  }

  get members() {
    if ( !this._members ) {
      this._members = _.map( this.children, ( c ) => {
        let path = c.path.split( '.' );
        path.shift();
        return {
          name: sanitizeName( c.name ),
          path: path.join( '.' ),
          factory: c.factory
        }
      } );
    }
    return this._members.length ? this._members : null;
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

  walk( visitor, arg ) {
    arg = ( visitor.beforeChildren || nop ).apply( this, arg );
    this.children.forEach( ( c ) => c.walk( visitor, arg ) );
    return ( visitor.afterChildren || nop ).apply( this, arg );
  }

  toAsciiTree() {
    return asciiTree( this );
  }
}

module.exports = Node;
