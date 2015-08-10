'use strict';

module.exports = function ( config ) {
    config.set( {
        basePath         : '',
        frameworks       : ['browserify', 'jasmine-jquery', 'jasmine-ajax', 'jasmine'],
        files            : [
            'test/**/*.js'
        ],
        preprocessors    : {
            'test/**/*.js' : ['browserify']
        },
        browserify       : {
            debug     : true,
            transform : ['browserify-istanbul'],
            plugin    : ['proxyquireify/plugin'],
            paths     : ['src/js']
        },
        reporters        : ['progress', 'junit', 'coverage'],
        browsers         : ['PhantomJS'],
        plugins          : [
            'browserify-istanbul',
            'proxyquireify',
            'karma-browserify',
            'karma-jasmine',
            'karma-jasmine-jquery',
            'karma-jasmine-ajax',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-coverage'
        ],
        coverageReporter : {
            type : "html",
            dir  : 'target/coverage-reports/'
        },
        junitReporter    : {
            outputDir  : 'target/surefire-reports/',
            outputFile : 'TEST-karma-results.xml'
        }
    } );
};