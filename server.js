var Faye   = require('faye');


var server = new Faye.NodeAdapter({mount: '/faye'});
var Logger = {
    incoming: function(message, callback) {
        console.log('[incoming]', message)
        callback(message)
    },
    outgoing: function(message, callback) {
        console.log('[outgoing]', message)
        callback(message)
    }
}
server.addExtension(Logger)

server.listen(process.env.PORT || 8000);
console.info('Server started')