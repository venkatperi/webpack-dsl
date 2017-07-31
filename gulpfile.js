const { promisify } = require( 'util' )
const gulp = require( 'gulp' )
const schema = require( './lib/schema' )
const fs = require( 'fs' )
const path = require( 'path' )
const arrayp = require( 'arrayp' )
const rimraf = promisify( require( 'rimraf' ) )
const mkdirp = promisify( require( 'mkdirp' ) )

const writeFile = promisify( fs.writeFile );

const GENDIR = path.join( __dirname, 'gen' );

gulp.task( 'gen', () => {
  arrayp.chain( [
    mkdirp( GENDIR ),
    () => schema.generateSources(),
    ( code ) => writeFile( `${GENDIR}/webpack_builder.js`, code )
  ] ).catch(console.log)
} )

gulp.task( 'clean', () => {
  arrayp.chain( [
    rimraf( GENDIR )
  ] )
} )
