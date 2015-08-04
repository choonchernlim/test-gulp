/**
 * Gulp - Demo 10 - Refresh the browser on file change!
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
var browserSync = require( 'browser-sync' );

gulp.task( 'minifyJs', function () {
    var b = watchify( browserify( {entries : './src/js/a.js', cache : {}, packageCache : {}} ) );

    var bundle = function () {
        b.bundle()
            .pipe( source( 'app.js' ) )
            .pipe( buffer() )
            .pipe( uglify() )
            .pipe( gulp.dest( './dist/js' ) )
            .pipe( browserSync.reload( {stream : true} ) );
    };

    b.on( 'update', bundle );

    return bundle();
} );

gulp.task( 'minifyCss', function () {
    return gulp.src( './src/scss/*.scss' )
        .pipe( sass() )
        .pipe( autoprefixer() )
        .pipe( minifyCSS() )
        .pipe( gulp.dest( './dist/css' ) )
        .pipe( browserSync.reload( {stream : true} ) );
} );

gulp.task( 'minifyImages', function () {
    return gulp.src( './src/img/**' )
        .pipe( changed( './dist/img' ) )
        .pipe( imageop() )
        .pipe( gulp.dest( './dist/img' ) )
        .pipe( browserSync.reload( {stream : true} ) );
} );

gulp.task( 'watch', ['minifyJs', 'browserSync'], function () {
    watch( './src/scss/*.scss', function () {
        gulp.start( 'minifyCss' );
    } );

    watch( './src/img/**', function () {
        gulp.start( 'minifyImages' );
    } );
} );

gulp.task( 'browserSync', function () {
    browserSync( {
        server : {
            baseDir : './'
        }
    } );
} );

gulp.task( 'default', ['minifyCss', 'minifyImages', 'watch'] );
