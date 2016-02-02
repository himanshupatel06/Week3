/// < reference path= "_reference.ts" />
var express = require('express');
var port = process.env.port || 3000;
var app = express();
app.get('/', function (req, res, next) {
    res.send('Hello Express!');
});
app.get('/info', function (req, res) {
    res.send('Custom info page..');
});
app.listen(port, function () {
    console.log("App Server started..On port.." + port);
});
/*
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
*/ 
//# sourceMappingURL=server.js.map