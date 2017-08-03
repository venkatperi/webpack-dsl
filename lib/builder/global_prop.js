'use "strict'

const _ = require( 'lodash' )
const debug = require( 'debug' )( 'webpack-dsl:global_prop' );
const uniqueString = require( 'unique-string' )

const storeName = uniqueString();
global[ storeName ] = {};
const store = global[ storeName ];

function nop() {}

function globalProp( name, opts = {} ) {
  debug( "add: %s, %o", name, opts );
  if ( global[ name ] ) {
    debug( global[ name ] );
    throw new TypeError( `global property already exists: ${name}` );
  }
  Object.defineProperty( global, name, {
    // so that we can remove this property down the line
    configurable: true,
    get: () => {
      let val = store[ name ];
      return typeof val === 'function' ?
        val() : val
    },

    set: ( v ) => {
      if ( opts.readOnly )
        throw new Error( "Can't change readonly property" );
      v = opts.convert ? opts.convert( v ) : v;
      store[ name ] = v;
    }
  } )

  if ( opts.initialValue )
    global[ name ] = opts.initialValue;
}

function deleteGlobalProps() {
  _.forOwn( store, ( v, k ) => {
    delete global[ k ];
    debug( `delete global.${k}` );
  } )

  delete global[ storeName ];
}

module.exports = {
  globalProp,
  deleteGlobalProps
}
