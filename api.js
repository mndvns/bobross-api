/**
 * Module dependencies
 */

var api = module.exports = require('simple-stack-common')({
  base: {
    host: 'x-orig-host',
    path: 'x-orig-path',
    port: 'x-orig-port',
    proto: 'x-orig-proto'
  }
});

var quotes = require('./quotes');

/**
 * Decorate JSON response with `href` and `root`
 */

api.useBefore('router', require('hyper-decorate'));

api.get('/', function(req, res, next) {
  res.json({
    quote: randomQuote(1)[0]
  });
});

function randomQuote(l){
  var arr = [];
  for (var i = 0; i < l; i++) {
    arr[i] = quotes[Math.floor(Math.random()*quotes.length)];
  }
  return arr;
}
