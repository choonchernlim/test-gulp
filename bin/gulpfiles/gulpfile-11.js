/**
 * Gulp - Demo 11 - Analyzing browserify bundle's module tree
 */

var gulp = require( 'gulp' );
var browserify = require( 'browserify' );
var open = require( 'opener' );
var disc = require( 'disc' );
var fs = require( 'fs' );

var output = 'output.html';

gulp.task( 'analyze', function () {
    return browserify( './src/js/a.js', {
        fullPaths : true
    } )
        .bundle()
        .pipe( disc() )
        .pipe( fs.createWriteStream( output ) )
        .once( 'close', function () {
            open( output )
        } );
} );

gulp.task( 'default', ['analyze'] );
