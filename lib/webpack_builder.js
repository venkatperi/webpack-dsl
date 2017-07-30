const _ = require( 'lodash' );
const util = require( 'util' );
const path = require( 'path' );
const { FactoryBuilderSupport, AbstractFactory } =
require( 'node-factory-builder' );
const merge = require( 'webpack-merge' );

const append = merge.strategy( {
  entry: 'append',
  plugins: 'append'
} );

class WebpackConfig {
  constructor( config = {} ) {
    this._config = config;
    [ 'entry', 'context', 'output', ].forEach( ( k ) =>
      this[ k ] = ( val ) => {
        let obj = {};
        obj[ k ] = val;
        this._config = append( this._config, obj );
      } );
  }

  get config() {
    return this._config;
  }

  plugin( p ) {
    this._config = append( this._config, { plugins: [ p ] } );
  }

  modules( m ) {
    this._config = append( this._config, m._config );
  }
}

class Module {
  constructor() {
    this.__type = 'modules';
    this._config = {};
  }

  noParse( val ) {
    this._config = merge( this._config, {
      module: {
        noParse: val
      }
    } );
  }

  rule( r ) {
    this._config = append( this._config, r._config );
  }
}

class Rule {
  constructor() {
    this.__type = 'rule';
    this._config = {
      module: {
        rules: [ {} ]
      }
    };

    //append to list
    [ 'include', 'exclude', 'and', 'or', 'not' ].forEach( ( k ) =>
      this[ k ] = ( val ) => {
        let arr = this._config.module.rules[ 0 ][ k ] || [];
        this._config.module.rules[ 0 ][ k ] =
          _.flatten( arr.concat( [ val ] ) );
      } );

    //replace
    [ 'test' ].forEach( ( k ) =>
      this[ k ] = ( val ) => {
        this._config.module.rules[ 0 ][ k ] = val;
      } );

  }
}

class DispatchingFactory extends AbstractFactory {
  setChild( builder, parent, child ) {
    builder.once( 'nodeCompleted', ( b, p, c ) => {
      if ( c === child ) this.onChildCompleted( b, p, c );
    } );
  }

  onChildCompleted( builder, parent, child ) {
    if ( child ) {
      let handler = parent[ child.__type ];
      if ( handler )
        handler.call( parent, child.args || child );
    }
  }
}

class WebpackConfigFactory extends DispatchingFactory {
  newInstance( builder, name, args ) {
    return new WebpackConfig( args )
  }
}

class ObjectFactory extends AbstractFactory {
  newInstance( builder, name, args ) {
    return { __type: name, args: args }
  }
}

class LeafFactory extends ObjectFactory {
  isLeaf() {
    return true;
  }
}

class PluginFactory extends AbstractFactory {

  newInstance( builder, name, args ) {
    let id = args.shift();
    switch ( args.length ) {
      case 0:
        args = null;
        break;
      case 1:
        args = args[ 0 ];
        break;
    }

    let plugin = null;
    switch ( typeof id ) {
      case 'string':
        let klass = require( id );
        plugin = new klass( args );
        break;

      case 'function':
        plugin = new id( args );
        break;

      default:
        plugin = id;
    }

    return {
      __type: name,
      args: plugin
    }
  }
}

class ModuleFactory extends DispatchingFactory {
  getBuilder( parent ) {
    return new ModuleBuilder( parent );
  }

  newInstance( builder, name, args ) {
    return new Module();
  }

}

class RuleFactory extends DispatchingFactory {
  getBuilder( parent ) {
    return new RuleBuilder( parent );
  }

  newInstance( builder, name, args ) {
    return new Rule();
  }
}

class WebpackBuilder extends FactoryBuilderSupport {
  constructor( parent ) {
    super( parent );
    this.registerFactory( 'webpackConfig', new WebpackConfigFactory() );
    this.registerFactory( 'entry', new LeafFactory() );
    this.registerFactory( 'context', new LeafFactory() );
    this.registerFactory( 'output', new ObjectFactory() );
    this.registerFactory( 'plugin', new PluginFactory() );
    this.registerFactory( 'Module', new ModuleFactory() );
  }
}

class ModuleBuilder extends FactoryBuilderSupport {
  constructor( parent ) {
    super( parent );
    this.registerFactory( 'noParse', new LeafFactory() );
    this.registerFactory( 'rule', new RuleFactory() );
  }
}

class RuleBuilder extends FactoryBuilderSupport {
  constructor( parent ) {
    super( parent );
    this.registerFactory( 'test', new LeafFactory() );
    this.registerFactory( 'include', new LeafFactory() );
    this.registerFactory( 'exclude', new LeafFactory() );
    this.registerFactory( 'and', new LeafFactory() );
    this.registerFactory( 'or', new LeafFactory() );
    this.registerFactory( 'not', new LeafFactory() );
  }
}

module.exports = WebpackBuilder
