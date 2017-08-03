const _ = require( 'lodash' )
const builder = require( './lib/builder' );

function dsl() {
  return builder.buildFile();
}

_.extend( dsl, builder )
module.exports = dsl
