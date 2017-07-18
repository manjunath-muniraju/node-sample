var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello World! Node JS\n");
}).listen(1337);
console.log("Server Running!");
