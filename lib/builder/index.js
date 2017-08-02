'use "strict'

const _ = require( 'lodash' )
const compile = require( './compile' );
const evaluate = require( './compile' );

module.exports = _.extend( {},
  require( './compile' ), 
  require( './evaluate' ) )
