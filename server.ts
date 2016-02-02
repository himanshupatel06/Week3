/// < reference path= "_reference.ts" />

import http = require('http');

var port:number = process.env.port || 3000 ; 
var server = http.createServer(function(req:http.ServerRequest, res:http.ServerResponse){
     
     res.writeHead(200, {'Content-type': 'text/plain'});
     
     res.end("Hello node");
});


server.listen(port, function()
{
   console.log("Server started..listening on port.." +port);
});
