console.log('starting request-promise');

var rp = require('request-promise');

rp('http://www.google.com')
    .then(function (htmlString) {
        // Process html...
        console.log(htmlString.length)
    })
    .catch(function (err) {
        // Crawling failed...
    });

rp('http://www.google.com')
    .then(function ($) {
         // Process html like you would with jQuery...
        var myTitle = $(html).text();
        console.log('2')
    })
    .catch(function (err) {
        // Crawling failed...
    });