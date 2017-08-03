'use "strict'

const debug = require( 'debug' )( 'webpack-dsl:build' )
const { compileFile } = require( './compile' )

function buildFile( file = './webpack', opts = {} ) {
  let nodeEnv = process.env.NODE_ENV;
  debug( "buildFile %s %o, %s", file, opts, nodeEnv )

  let configTree = compileFile( file, opts )
  debug( configTree.toAsciiTree() )

  return configTree.walk( {
    afterChildren( n ) {
      if ( !n.env || n.env === nodeEnv )
        return n.evaluate();
    }
  } );
}

module.exports = {
  buildFile
}
