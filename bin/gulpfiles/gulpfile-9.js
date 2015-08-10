/**
 * Gulp - Demo 9 - Constantly watch for file changes.
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
var watchify = require( 'watchify' );
var buffer = require( 'vinyl-buffer' );
var watch = require( 'gulp-watch' );
var rename = require( 'gulp-rename' );

gulp.task( 'minifyJs', function () {
    var b = watchify( browserify( {entries : './src/js/a.js', cache : {}, packageCache : {}} ) );

    var bundle = function () {
        b.bundle()
            .pipe( source( 'app.js' ) )
            .pipe( buffer() )
            .pipe( gulp.dest( './dist/js' ) )
            .pipe( uglify() )
            .pipe( rename( {suffix : '.min'} ) )
            .pipe( gulp.dest( './dist/js' ) );
    };

    b.on( 'update', bundle );

    return bundle();
} );

gulp.task( 'minifyCss', function () {
    return gulp.src( './src/scss/*.scss' )
        .pipe( sass() )
        .pipe( autoprefixer() )
        .pipe( gulp.dest( './dist/css' ) )
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

gulp.task( 'watch', ['minifyJs'], function () {
    watch( './src/scss/*.scss', function () {
        gulp.start( 'minifyCss' );
    } );

    watch( './src/img/**', function () {
        gulp.start( 'optimizeImages' );
    } );
} );

gulp.task( 'default', ['minifyCss', 'optimizeImages', 'watch'] );
