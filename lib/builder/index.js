'use "strict'

const _ = require( 'lodash' )

module.exports = _.extend( {},
  require( './compile' ), 
  require( './build' ) )
