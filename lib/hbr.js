require( './helpers' )
const fs = require( 'fs' );
const _ = require( 'lodash' );
const Handlebars = require( 'handlebars' );
const path = require( 'path' );

let templates = _.fromPairs(
  [ 'class', 'factory' ].map(
    ( t ) => [ t,
      Handlebars.compile(
        fs.readFileSync(
          path.join( __dirname, `../templates/${t}.hbr` ),
          'utf8' ) )
    ] ) );

module.exports = {
  templates
}
