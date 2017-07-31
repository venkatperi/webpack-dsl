'use "strict'

const util = require( 'util' );
const _ = require( 'lodash' );
const WebpackBuilder = require( '../gen/webpack_builder' );

let file = __dirname + '/fixtures/config1';
let builder = new WebpackBuilder()

let config = builder.build( () =>
  webpackConfig( () => require( file ) )
);

console.log( config.toAsciiTree() );

function nop() {}

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

}

let v = new Visitor()
config.walk( {
  afterChildren( node ) {
    if ( !node.type ) return;
    let type = Array.isArray( node.args ) ? 'array' : typeof node.args;

    ( v[ node.type ] || nop ).call( v, node.args, type );
  }
} );

console.log( v.config );
