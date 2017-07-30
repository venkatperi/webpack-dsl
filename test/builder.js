'use "strict'

const util = require( 'util' );
const WebpackBuilder = require( '../lib/factories' );

let base = new WebpackBuilder().buildFile( __dirname + '/fixtures/base', {} );
let x = new WebpackBuilder().buildFile( __dirname + '/fixtures/config1', base.config );
console.log( util.inspect( x.config, { depth: 5 } ) );
