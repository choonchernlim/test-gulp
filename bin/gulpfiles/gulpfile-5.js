/**
 * Gulp - Demo 5 - Adding vendor prefixes to CSS file
 */

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );

gulp.task( 'sass', function () {
    return gulp.src( './src/scss/*.scss' )
        .pipe( sass() )
        .pipe( autoprefixer() )
        .pipe( gulp.dest( './dist/css' ) );
} );

gulp.task( 'default', ['sass'] );
