const webpack = require( 'webpack' )
const path = require( 'path' )
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )

require( './vendor' )

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

plugin( webpack.DefinePlugin, {
  TEST: JSON.stringify( 'test' )
} )

plugin( "extract-text-webpack-plugin", "assets/styles.css" )

module$( () => {
  noParse( /abc/ )

  rule( () => {
    test( /\.html$/ )
    use( 'file-loader?name=[path][name].[ext]' )
  } )

  rule( () => {
    test( /\.css$/ )
    use( ExtractTextPlugin.extract( {
      fallback: 'style-loader',
      use: 'css-loader'
    } ) )
  } )

  rule( () => {
    test( /\.(png|gif|jpg|svg)$/ )
    use( 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]' )
  } )

} )
