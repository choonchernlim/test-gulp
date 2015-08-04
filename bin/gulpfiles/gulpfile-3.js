/**
 * Gulp - Demo 3 - Minify combined JS file.
 */

var gulp = require( 'gulp' );
var browserify = require( 'browserify' );
var source = require( 'vinyl-source-stream' );
var uglify = require( 'gulp-uglify' );

gulp.task( 'browserify', function () {
    return browserify( {entries : './src/js/a.js'} )
        .bundle()
        .pipe( source( 'app.js' ) )
        .pipe( gulp.dest( './dist/js' ) );
} );

gulp.task( 'minifyJs', ['browserify'], function () {
    return gulp.src( './dist/js/app.js' )
        .pipe( uglify() )
        .pipe( gulp.dest( './dist/js' ) );
} );

gulp.task( 'default', ['minifyJs'] );