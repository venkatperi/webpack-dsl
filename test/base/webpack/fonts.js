module$( () => {
  rule( () => {
    test( /\.(ttf|eot|woff|woff2)$/ )
    use( 'url-loader' )
  } )
} )
