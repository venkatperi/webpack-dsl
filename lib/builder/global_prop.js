'use "strict'

const _ = require('lodash')
const uniqueString = require( 'unique-string' )

const storeName = uniqueString();
global[ storeName ] = {};
const store = global[ storeName ];

function nop() {}

function globalProp( name, opts = {} ) {
  Object.defineProperty( global, name, {
    get: () => {
      let val = store[ name ];
      return typeof val === 'function'
        ? val() : val
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
  _.forOwn( store, ( v, k ) => delete global[ k ] );
  delete global[ storeName ];
}

module.exports = {
  globalProp,
  deleteGlobalProps
}

