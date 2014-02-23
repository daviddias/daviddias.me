exports = module.exports = create;
var context = {
  things: require('./../db/data.json')
};


function create(request, reply) {
  reply.view('home', context);
}