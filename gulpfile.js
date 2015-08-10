/**
 * Gulp - Demo 1 - Getting started.
 */

var gulp = require( 'gulp' );

gulp.task( 'default', ['task1'], function () {
    console.log( 'Default Task' );
} );

gulp.task( 'task1', function () {
    console.log( 'Task 1' );
} );

