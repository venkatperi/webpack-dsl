const path = require('path')

module$( () => {
  rule( () => {
    test( /\.js$/ )
    use( 'babel-loader' )
    include( path.resolve( srcDirs.js ) )
  } )
} )

