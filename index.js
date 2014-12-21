var Hapi = require('hapi');
var jade = require('jade');

var server = Hapi.createServer(parseInt(process.env.PORT) || 8080);

server.views({
  engines: {
    jade: jade,
  },
  isCached: false,
  path: './views'
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply.view('index', { title: 'David Dias' });
  }
});

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: { path: './public', listing: false, index: true }
  }
});


server.ext('onPreResponse', function (request, reply) {
  var response = request.response;
  if (!response.isBoom) {
    return reply();
  }

  // Replace error with friendly HTML
  var error = response;
  var ctx = {
    message: (error.output.statusCode === 404 ? 'page not found' : 'something went wrong')
  };

  reply.view('error', ctx);
});

server.start(function () {
    console.log('Server started at: ' + server.info.uri);
});