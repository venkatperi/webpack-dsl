const { AbstractFactory } = require( 'node-factory-builder' );

class BaseFactory extends AbstractFactory {

  setChild( builder, parent, child ) {
    parent.addChild( child );
  }
}

module.exports = BaseFactory;
