'use "strict'

const path = require( 'path' )
const WebpackBuilder = require( '../../gen/webpack_builder' );
const globals = require( './globals' )

function _compile( closure, opts = {} ) {
  try {
    globals.register( opts );
    return new WebpackBuilder()
      .build(
        () => webpackConfig( closure ) )
  } catch ( err ) {
    console.log( err );
  } finally {
    globals.unregister();
  }
}

function compile( closure ) {
  return _compile( closure );
}

function compileFile( file ) {
  if ( !file || typeof file !== 'string' )
    throw new TypeError( "file must be a string" );

  let parts = path.parse( file )
  return _compile( () => require( file ), {
    projectDir: parts.dir
  } )
}

module.exports = {
  compileFile,
  compile,
}
