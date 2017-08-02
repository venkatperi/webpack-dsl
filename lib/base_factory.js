const { AbstractFactory } = require( 'factory-builder-support' );

class BaseFactory extends AbstractFactory {

  setChild( builder, parent, child ) {
    parent.addChild( child );
  }
}

module.exports = BaseFactory;
