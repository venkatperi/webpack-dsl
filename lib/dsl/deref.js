const _ = require('lodash');

module.exports = function( schema, ref ) {
  let parts = ref.split( '/' );
  if ( parts[ 0 ] === '#' )
    parts.shift();
  return _.get( schema, parts )
}

