'use "strict'

const _ = require( 'lodash' );
const path = require( 'path' );
const { globalProp, deleteGlobalProps } = require( './global_prop' );

function registerEnvTypes() {
  environments.forEach( ( env ) =>
    global[ env ] = ( closure ) => {
      let prev = currentEnv;
      currentEnv = env;
      closure()
      currentEnv = prev;
    } )

  global.someEnvironments = ( envs, closure ) => {
    envs.forEach( ( e ) => closure( e ) )
  }

  global.notEnvironments = ( envs, closure ) => {
    _.difference( environments, envs )
      .forEach( ( e ) => closure( e ) )
  }
}

function register( opts = {} ) {
  global.ext = {}
  globalProp( 'env' );
  globalProp( 'environments', {
    initialValue: opts.environments || [ 'development', 'production', 'testing', 'staging' ]
  } );
  globalProp( 'currentEnv' );
  globalProp( 'projectDir', { initialValue: opts.projectDir || process.cwd() } );
  globalProp( 'buildDir', { initialValue: path.join( projectDir, 'build' ) } );
  globalProp( 'srcDirs', { initialValue: {} } );
  globalProp( 'publicPath', { initialValue: '/' } );

  srcDirs.js = path.join( projectDir, 'src' )
  srcDirs.css = path.join( projectDir, 'css' )

  registerEnvTypes();
}

function unregister() {
  environments.forEach( ( env ) => delete global[ env ] )
  delete global.allEnvironments;
  delete global.ext;
  deleteGlobalProps();
}

module.exports = {
  register,
  unregister,
}
