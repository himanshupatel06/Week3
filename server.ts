/// < reference path= "_reference.ts" />

import express = require('express');
var port:number = process.env.port || 3000 ; 
var app:express.Express = express();

app.get('/', function (req:express.Request, res:express.Response, next:any) {
  res.send('Hello Express!');
});

app.get('/info', function (req:express.Request, res:express.Response) {
  res.send('Custom info page..');
});

app.listen(port, function()
{
   console.log("App Server started..On port.." +port);
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