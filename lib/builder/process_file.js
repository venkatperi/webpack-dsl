'use "strict'

const util = require( 'util' );
const _ = require( 'lodash' );
const { compileFile } = require( '../builder' );

function processFile( file ) {
  return compileFile( file ).walk( {
    afterChildren( n ) {
      return n.evaluate();
    },
  } );
}

module.exports = processFile;
