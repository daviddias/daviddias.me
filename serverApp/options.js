module.exports = {
  views: {
    path: __dirname + '/views',
    partialsPath: __dirname + '/views/partials',
    engines: {
      html: 'handlebars'
    }
  },
  cache: {
    engine: 'memory'
  },
  state: {
    cookies: {
      strictHeader: false
    }
  }
};
