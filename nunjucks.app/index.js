var express = require( 'express' ) ;
var nunjucks = require( 'nunjucks' ) ;
var app = express() ;

var templatesPath = './nunjucks.app' ;
nunjucks.configure( templatesPath, {
    autoescape: true,
    express: app
} ) ;

app.get( '/', function( req, res ) {
    var data = {
        firstName: 'Louis',
        lastName: 'Meckes'
    } ;
    return res.render( 'index.html', data ) ;
} ) ;

console.log('listening on localhost:3000')
app.listen( 3000 ) ;