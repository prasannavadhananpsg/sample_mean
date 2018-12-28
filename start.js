var http = require('http');
var configForServer = require("./app.js");


configForServer.set('port', 3000);


var server = http.createServer(configForServer);
server.listen(3000);