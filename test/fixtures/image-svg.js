
module$( () => {
  rule( () => {
    test( /\.svg$/ )
    use( 'url-loader?limit=2048', 'image-webpack-loader?bypassOnDebug' )
  } )
} )
