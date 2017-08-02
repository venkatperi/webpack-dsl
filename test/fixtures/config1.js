const webpack = require( 'webpack' )
const path = require( 'path' )

require( './vendor' )
require( './css' )

entry( { app: './app.js' } )
entry( { index: './index.html' } )

context( __dirname )

output( {
  path: path.resolve( __dirname, 'dist' ),
  filename: 'assets/[name].bundle.js',
} )

node( {
  module: 'empty',
  net: 'empty',
  fs: 'empty'
} )

development( () =>
  plugin( webpack.DefinePlugin, {
    TEST: JSON.stringify( 'test' )
  } )
)

module$( () => {
  noParse( /abc/ )

  rule( () => {
    test( /\.html$/ )
    use( 'file-loader?name=[path][name].[ext]' )
    include( [
      path.resolve( __dirname, "app/styles" ),
      path.resolve( __dirname, "vendor/styles" )
    ] )
  } )

  rule( () => {
    test( /\.(png|gif|jpg|svg)$/ )
    use( 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]' )
  } )

} )
