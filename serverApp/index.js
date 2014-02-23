var Hapi       = require('hapi');
var options    = require('./options.js');

var port       = parseInt(process.env.PORT) || 8080;

var server     = module.exports =
  Hapi.createServer(port, options);
var routes     = require('./routes');

server.start(function () {
  console.log('Server started at: ' + server.info.uri);
});