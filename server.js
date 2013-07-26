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

  console.log(request.url)
  var match_root = /^\/$/.exec(request.url)
      // , match_members = /^\/(members|about)\/(.*)/.exec(request.url)
      // , match_class = /^\/(essential-nodejs-training-course|nodejs-consulting-subscriptions|contact)/.exec(request.url)
      , match_blog = /^\/(blog)\/(.*)/.exec(request.url)
      , match_feed = /^\/(blog\/feed)/.exec(request.url)

    if (match_root) {
      request.url = "index.html"
  }
    // } else if (match_members) {
    //   request.url = "members/" + match_members[2].replace("+", "") + ".html"
    // } else if (match_class) {
    //   request.url = match_class[1] + ".html"
    // } else 

    if (match_blog) {
      request.url = match_blog[0] + "/index.html"
      if (match_feed) { request.url = match_blog[0] + "/blog/index.xml" }
    } 

    request.url = request.url.toLowerCase()
    console.log(request.url)

    request.on('end', function () {
      file.serve(request, response)
    })
    request.resume()    



}).listen(8080, function() { console.log('Listening on 8080')});
