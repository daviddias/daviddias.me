var path        = require('path');
var server      = require('./../index.js');

server.route({
  method: 'GET',
  path: '/{path*}',
  config : {
    handler: {
      directory: function(){
        var staticAssetsPath = path.resolve(__dirname, '../..', 'public');
        return {
          path: staticAssetsPath,
          listing: false,
          index: true
        };
      }()
    }
  }
});