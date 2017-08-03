const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )

plugin(
  new ExtractTextPlugin( {
    filename: "style.css",
    allChunks: true
  } )
)

module$( () => {
  rule( () => {
    test( /\.css$/ )
    use( ExtractTextPlugin.extract( {
      fallback: 'style-loader',
      use: 'css-loader',
    } ) )
    include( srcDirs.css )
  } )
} )
