var path = require( "path" );
var webpack = require( "webpack" );

// The entry points for the pages
entry( {
  pageA: "./aEntry",
  pageB: "./bEntry",
} )

// This file contains common modules but also the router entry
entry( { "commons": "./router" } )

output( {
  path: path.join( __dirname, "js" ),
  publicPath: "js/",
  filename: "[name].bundle.js",
  chunkFilename: "[id].chunk.js"
} )

// Extract common modules from the entries to the commons.js file
// This is optional, but good for performance.
plugin( webpack.optimize.CommonChunkPlugin, {
  name: "commons",
  filename: "commons.js"
} )


