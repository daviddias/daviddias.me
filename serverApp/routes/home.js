var home     = require('./../resources').home;
var server  = require('./../index.js');

server.route(
  { method: 'GET',
    path: '/',
    handler: home }
  );