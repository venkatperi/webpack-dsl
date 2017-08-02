'use strict'

const _ = require( 'lodash' );
const { Config } = require( 'webpack-config' );
const deepmerge = require( 'deepmerge' );
const { inspect } = require( 'util' );
const asciiTree = require( './util/ascii_tree' );
const { type, scalar, extend } = require( './util' );

function nop( x ) { return x; }

class ConfigNode {

  constructor( opts, ...args ) {
    opts = opts || {};
    this._name = opts.name;
    this._env = opts.env || currentEnv;
    if ( args.length === 0 )
      args = null;
    this._args = args;
    this.children = []
    this.parent = null;
    this._memberType = {};
  }

  get env() {
    return this._env
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

  evaluate() {
    if ( !this.parent )
      return this.value;

    //let args = this.isLeaf ? this.args : [ this.value ];
    let args = this.value ? [ this.value ] : this.args
    let handler = this.parent[ this.name ]

    if ( !handler ) {
      handler = this.parent._handler;
      args.unshift( this.name );
    }
    handler.apply( this.parent, args );
    return this.value;
  }

  _handler( name, ...args ) {
    switch ( this._memberType[ name ] ) {
      case 'object':
        return this._extend( name, ...args );
      case 'array':
        return this._push( name, ...args );
      default:
        return this._set( name, ...args );
    }
  }

  _set( path, ...args ) {
    this.value = this.value || {};
    this.value[ path ] = args[ 0 ];
  }

  _push( path, ...args ) {
    this.value = this.value || {};
    this.value[ path ] = ( this.value[ path ] || [] ).concat( args );
  }

  _extend( path, ...args ) {
    this.value = this.value || {};
    args.forEach( ( x ) =>
      this.value[ path ] = deepmerge( ( this.value[ path ] || {} ), x ) )
  }

  _merge( ...args ) {
    this.value = new Config()
      .merge( this.value, ...args )
      .toObject()
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
