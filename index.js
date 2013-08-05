var static = require('node-static');
var blogMaker = require('blog-maker');

blogMaker({ inputPath: 'data/posts'
          , outputPath: 'public'
          , templatePath: 'data/blog.html'
          , rssTemplatePath: 'data/rss.xml'
          , desiredBlogPath: 'blog'
})

var file = new(static.Server)('./public');

require('http').createServer(function (request, response) {
    request.on('end', function () {
      file.serve(request, response)
    })
    request.resume()    
}).listen(process.env.PORT || 80, function() { console.log('Listening on 80')});
