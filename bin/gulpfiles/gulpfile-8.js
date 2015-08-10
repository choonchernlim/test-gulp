/**
 * Gulp - Demo 8 - Putting everything together.
 */

var gulp = require( 'gulp' );
var browserify = require( 'browserify' );
var source = require( 'vinyl-source-stream' );
var uglify = require( 'gulp-uglify' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var minifyCSS = require( 'gulp-minify-css' );
var changed = require( 'gulp-changed' );
var imageop = require( 'gulp-image-optimization' );
var rename = require( 'gulp-rename' );

gulp.task( 'browserify', function () {
    return browserify( {entries : './src/js/a.js'} )
        .bundle()
        .pipe( source( 'app.js' ) )
        .pipe( gulp.dest( './dist/js' ) );
} );

gulp.task( 'minifyJs', ['browserify'], function () {
    return gulp.src( './dist/js/app.js' )
        .pipe( uglify() )
        .pipe( rename( {suffix : '.min'} ) )
        .pipe( gulp.dest( './dist/js' ) );
} );

gulp.task( 'sass', function () {
    return gulp.src( './src/scss/*.scss' )
        .pipe( sass() )
        .pipe( autoprefixer() )
        .pipe( gulp.dest( './dist/css' ) );
} );

gulp.task( 'minifyCss', ['sass'], function () {
    return gulp.src( './dist/css/*.css' )
        .pipe( minifyCSS() )
        .pipe( rename( {suffix : '.min'} ) )
        .pipe( gulp.dest( './dist/css' ) );
} );

gulp.task( 'optimizeImages', function () {
    return gulp.src( './src/img/**' )
        .pipe( changed( './dist/img' ) )
        .pipe( imageop() )
        .pipe( gulp.dest( './dist/img' ) );
} );

gulp.task( 'default', ['minifyJs', 'minifyCss', 'optimizeImages'] );
