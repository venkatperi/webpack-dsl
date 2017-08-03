const path = require( 'path' );

context( projectDir )
entry( './src/index.js' )
output( {
  filename: 'bundle.js',
  path: path.resolve( projectDir, 'dist' )
} )
