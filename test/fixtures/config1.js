const webpack = require( 'webpack' )
const path = require( 'path' )

entry( { app: './app.js' } )
entry( { index: './index.html' } )

context( __dirname + '/abc' )

output( {
  path: path.resolve( __dirname, 'dist' ),
  filename: 'assets/[name].bundle.js',
} )

plugin( webpack.DefinePlugin, {
  TEST: JSON.stringify( 'test' )
} )

plugin( "extract-text-webpack-plugin", "assets/styles.css" )

module$( () => {
  noParse( /abc/ )

  rule( () => {
    test( /\.html$/ )
    include( /\.html$/ )
    include( /\.xml$/ )
  } );

  rule( () => {
    test( /\.css$/ )
    include( /\.scss$/ )
  } )

} )
