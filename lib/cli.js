const yargs = require( 'yargs' );
const util = require( 'util' );
const path = require( 'path' );
const builder = require( './builder' );

function evaluate( args ) {
  return new Promise( ( resolve, reject ) => {
    resolve(
      builder.evaluateFile(
        path.join( process.cwd(), args.file ) ) )
  } );
}

const exec = ( f ) => ( args ) => {
  args.id = args.id || args._[ 1 ];
  f( args )
    .then( ( x ) => {
      x = typeof x === 'function' ? x() : x
      console.log( util.inspect( x, { depth: 5 } ) )
    } )
    .catch( console.log );
};

const args = yargs
  .command( 'evaluate', 'evaluate DSL config', {
    file: {
      alias: 'f',
      description: 'config file in DSL',
      required: true
    }
  }, exec( evaluate ) )
  .help()
  .usage( "usage: wpasc <command> [$1]" )
  .argv;
