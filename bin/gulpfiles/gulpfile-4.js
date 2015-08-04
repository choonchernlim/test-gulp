/**
 * Gulp - Demo 4 - Process SCSS files to CSS files.
 */

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

gulp.task( 'sass', function () {
    return gulp.src( './src/scss/*.scss' )
        .pipe( sass() )
        .pipe( gulp.dest( './dist/css' ) );
} );

gulp.task( 'default', ['sass'] );
