const { promisify } = require( 'util' )
const gulp = require( 'gulp' )
const fs = require( 'fs' )
const path = require( 'path' )
const arrayp = require( 'arrayp' )
const rimraf = promisify( require( 'rimraf' ) )
const mkdirp = promisify( require( 'mkdirp' ) )
const dsl = require( './lib/dsl' )

const writeFile = promisify( fs.writeFile );

const GENDIR = path.join( __dirname, 'gen' );

gulp.task( 'gen', () => {
  arrayp.chain( [
    mkdirp( GENDIR ),
    () => dsl(),
    ( src ) => arrayp.parallel( [
      writeFile( `${GENDIR}/webpack_builder.js`, src.builder ),
      writeFile( `${GENDIR}/webpack_classes.js`, src.classes ),
    ] )
  ] ).catch( console.log )
} )

gulp.task( 'clean', () => {
  arrayp.chain( [
    rimraf( GENDIR )
  ] )
} )

gulp.task( 'test', () => {
  require( './test/builder' )
} )
