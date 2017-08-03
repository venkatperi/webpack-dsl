const path = require( 'path' )

context( projectDir )
entry( { main: path.join( srcDirs.js, 'index.js' ) } )

output( {
  filename: '[name].js',
  path: buildDir,
  publicPath: publicPath
} )
