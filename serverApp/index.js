var nodeStatic  = require('node-static');
var path        = require('path');
var publicPath  = path.join(__dirname, '..', 'public');
var file        = new(nodeStatic.Server)(publicPath);

var server = require('http').createServer(function (request, response) {
    request.on('end', function () {
      file.serve(request, response);
    });
    request.resume();
  });

server.listen(process.env.PORT || 8080, function() {
  console.log('Listening on 8080, serving: ' + publicPath);
});
