'use "strict'

const util = require( 'util' );
const WebpackBuilder = require( '../gen/webpack_builder' );

let file = __dirname + '/fixtures/config1';
let builder = new WebpackBuilder()

let config = builder.build( () =>
  webpackConfig( () => require( file ) )
);

console.log( config.toAsciiTree() );
