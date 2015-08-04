/**
 * Gulp - Demo 7 - Minify images.
 */

var gulp = require( 'gulp' );
var changed = require( 'gulp-changed' );
var imageop = require( 'gulp-image-optimization' );

gulp.task( 'minifyImages', function () {
    return gulp.src( './src/img/**' )
        .pipe( changed( './dist/img' ) )
        .pipe( imageop() )
        .pipe( gulp.dest( './dist/img' ) );
} );

gulp.task( 'default', ['minifyImages'] );
