'use "strict'

const _ = require( 'lodash' );
const path = require( 'path' );
const WebpackBuilder = require( '../../gen/webpack_builder' );

global.__store = {};

function nop() {}

function defineProperty( name, opts = {} ) {
  Object.defineProperty( global, name, {
    get: () => typeof __store[ name ] === 'function' ?
      __store[ name ]() : __store[ name ],

    set: ( v ) => __store[ name ] = v,
  } );
  if ( opts.initialValue )
    global[ name ] = opts.initialValue;
}

function registerEnvTypes() {
  [ 'development', 'production', 'testing', 'staging' ].forEach( ( env ) =>
    global[ env ] = ( closure ) => {
      let prev = currentEnv;
      currentEnv = env;
      closure()
      currentEnv = prev;
    } )
}

function registerGlobals() {
  global.ext = {}
  defineProperty( 'currentEnv' );
  defineProperty( 'projectDir', { initialValue: process.cwd() } );
  defineProperty( 'buildDir', {
    initialValue: () => path.join( projectDir, 'build' )
  } );
  defineProperty( 'srcDirs', { initialValue: {} } );

  srcDirs.js = './src'
  srcDirs.css = './css'

  registerEnvTypes();
}

function unregisterGlobals() {
  delete global.ext;
  _.forOwn( __store, ( v, k ) => delete global[ k ] );
  delete global.__store;
}

function _compile( closure ) {
  try {
    registerGlobals();
    return new WebpackBuilder().build(
      () => webpackConfig( closure ) )
  } catch ( err ) {
    console.log( err );
  } finally {
    unregisterGlobals();
  }
}

function compile( closure ) {
  return _compile( closure );
}

function compileFile( file ) {
  return _compile( () => require( file ) )
}

function evaluateFile( file, opts = {} ) {
  let env = process.env.NODE_ENV;
  return compileFile( file ).walk( {
    afterChildren( n ) {
      if ( !n.env || n.env === env )
        return n.evaluate();
    },
  } );
}

module.exports = {
  compileFile,
  compile,
  evaluateFile
}
