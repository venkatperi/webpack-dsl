const webpack = require( 'webpack' );
const path = require( 'path' );

module.exports = ( base ) =>
  webpackConfig( base, () => {
    entry( {
      vendor: [ 'jquery', 'antlr4', 'lodash', 'brace',
        'inspire-tree', 'inspire-tree-dom'
      ]
    } )
  } )
