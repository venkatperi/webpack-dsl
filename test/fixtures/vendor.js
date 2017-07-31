const webpack = require( 'webpack' )

entry( { vendor: [ 'jquery', 'lodash' ] } )

resolve( () => {
  alias( { jquery: 'jquery/src/jquery' } )
} )

plugin( webpack.ProvidePlugin, {
  $: 'jquery',
  jQuery: 'jquery'
} )

plugin( webpack.optimize.CommonsChunkPlugin, {
  name: 'vendor',
  minChunks: Infinity
} )

