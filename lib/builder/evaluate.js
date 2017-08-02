'use "strict'

const compile = require('./compile')

function evaluateFile( file, opts = {} ) {
  let nodeEnv = process.env.NODE_ENV;

  return ( e ) => {
    let prevEnv = global.env;
    global.env = e;
    try {
      return compile.compileFile( file )
        .walk( {
          afterChildren( n ) {
            if ( !n.env || n.env === nodeEnv )
              return n.evaluate();
          }
        } );
    } catch ( err ) {
      console.log( err );
    } finally {
      global.e = prevEnv;
    }
  }
}

module.exports = {
  evaluateFile
}
