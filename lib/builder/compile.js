'use "strict'

const path = require( 'path' )
const debug = require( 'debug' )( 'webpack-dsl:compile' );
const WebpackBuilder = require( '../webpack_builder' );
const globals = require( './globals' )

function _compile( closure, opts = {} ) {
  try {
    globals.register( opts );
    return new WebpackBuilder()
      .build(
        () => webpackConfig( closure ) )
  } finally {
    globals.unregister();
  }
}

function compile( closure ) {
  debug( 'compile' )
  return _compile( closure );
}

function compileFile( file, opts = {} ) {
  if ( !file || typeof file !== 'string' )
    throw new TypeError( "file must be a string" );

  file = path.resolve( process.cwd(), file );
  let dir = path.dirname( file )
  dir = path.basename( dir ) === 'webpack' ?
    path.dirname( dir ) : dir

  debug( `compileFile ${file}, dir: ${dir}` )
  return _compile( () => {
    require( file );
  }, {
    projectDir: dir
  } )
}

module.exports = {
  compileFile,
  compile,
}
