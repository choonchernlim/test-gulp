/**
 * Gulp - Demo 6 - Minify CSS file.
 */

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var minifyCSS = require( 'gulp-minify-css' );

gulp.task( 'sass', function () {
    return gulp.src( './src/scss/*.scss' )
        .pipe( sass() )
        .pipe( autoprefixer() )
        .pipe( gulp.dest( './dist/css' ) );
} );

gulp.task( 'minifyCss', ['sass'], function () {
    return gulp.src( './dist/css/*.css' )
        .pipe( minifyCSS() )
        .pipe( gulp.dest( './dist/css' ) );
} );

gulp.task( 'default', ['minifyCss'] );
