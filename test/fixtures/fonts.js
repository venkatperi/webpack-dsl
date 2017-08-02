
module( () => {
  rule( () => {
    test( /\.js$/ )
    use( 'babel-loader' )
    include( path.resolve( srcDirs.js ) )
  } )
} )

