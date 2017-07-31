const fs = require( 'fs' );
const _ = require( 'lodash' );
const Handlebars = require( 'handlebars' );
const path = require( 'path' );
require( '../util/helpers' )

let templates = _.fromPairs(
  [ 'footer', 'header', 'class', 'classExt', 'factory', 'builder' ].map(
    ( t ) => [ t,
      Handlebars.compile(
        fs.readFileSync(
          path.join( __dirname, `../../templates/${t}.hbr` ),
          'utf8' ) )
    ] ) );

module.exports = {
  templates
}
