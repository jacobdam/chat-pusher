var Faye   = require('faye');


var server = new Faye.NodeAdapter({mount: '/faye'});

server.listen(process.env.PORT || 8000);
