/**
 * Gulp - Demo 2 - Combining JS files with Browserify.
 */

var gulp = require( 'gulp' );
var browserify = require( 'browserify' );
var source = require( 'vinyl-source-stream' );

gulp.task( 'browserify', function () {
    return browserify( {entries : './src/js/a.js'} )
        .bundle()
        .pipe( source( 'app.js' ) )
        .pipe( gulp.dest( './dist/js' ) );
} );

gulp.task( 'default', ['browserify'] );
