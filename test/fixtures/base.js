const webpack = require( 'webpack' )
const path = require( 'path' )

context( projectDir )
stats( 'errors-only' )
cache( true )
resolve( { extensions: [ '*', '.js', '.jsx' ] } )
entry( { main: path.join( srcDirs.js, 'index.js' ) } )

output( {
  filename: '[name].js',
  pathinfo: !ext.inProduction,
  path: buildDir,
  publicPath: publicPath,
} )

require( './devtool' )
require( './js' )
require( './fonts' )
require( './stats' )
