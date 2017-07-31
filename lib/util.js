'use strict'

const _ = require( 'lodash' );

function classCase( str ) {
  return str && typeof str === "string" ?
    _.upperFirst( _.camelCase( str ) ) :
    ''
} 

module.exports = {
  classCase
}
