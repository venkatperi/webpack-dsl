'use "strict'

const util = require( 'util' );
const _ = require( 'lodash' );

class Visitor {
  constructor() {
    this.config = {}
  }

  _extend( path, args, type ) {
    switch ( type ) {
      case 'object':
        _.set( this.config, path, _.extend( {}, _.get( this.config, path ), args ) );
        break;
    }
  }

  entry( ...args ) {
    this._extend( 'entry', ...args );
  }

  output( ...args ) {
    this._extend( 'output', ...args );
  }

  node( ...args ) {
    this._extend( 'node', ...args );
  }

  plugin( arg ) {
    this.config.plugins = this.config.plugins || [];
    this.config.plugins.push( arg );
  }
}

let v = new Visitor()
config.walk( {
  afterChildren( node ) {
    if ( !node.type ) return;
    let type = getType( node.args );

    ( v[ node.type ] || nop ).call( v, node.args, type );
  }
} );

