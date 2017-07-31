'use "strict'

const _ = require( 'lodash' );
const WebpackBuilder = require( '../../gen/webpack_builder' );

function compile( closure ) {
  let builder = new WebpackBuilder()

  return builder.build( () =>
    webpackConfig( closure )
  )
}

function compileFile( file ) {
  let builder = new WebpackBuilder()

  return builder.build( () =>
    webpackConfig( () => require( file ) )
  )
}

module.exports = {
  compileFile,
  compile
}
