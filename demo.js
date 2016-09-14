var http = require('http');
var hostname = '127.0.0.1';
var port = 3000;
function handleRequest(req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}
 http.createServer(handleRequest).listen(8000);
//var server = http.createServer(function(request,response){
	//response.writehead(200,{'content-type':'text/plain'});
	//response.end('Hello\n');
//});

//server.listen(port, hostname, () => {
 // console.log(`Server running at http://${hostname}:${port}/`);
//});
console.log("hello node js is running");