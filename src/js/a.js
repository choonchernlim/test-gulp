var $ = require( 'jquery' );
var b = require( './b' );

var a = (function () {
    document.write( '<h1>' + b() + +'</h1>' );

    document.write( '<h1>' + $( window ).width() + '</h1>' );
})();

console.log( Object.keys( window ) );
