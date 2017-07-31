const _ = require( 'lodash' );
const Handlebars = require( 'handlebars' );
const { classCase } = require( './index' );

function capitalize( s ) {
  return s.charAt( 0 ).toUpperCase() + s.slice( 1 );
}

Handlebars.registerHelper( 'capitalize', function( str ) {
  if ( str && typeof str === "string" ) {
    return capitalize( str );
  }
  return '';
} );

Handlebars.registerHelper( 'classCase', classCase );
