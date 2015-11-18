var http = require('http'),
	fs = require('fs'),
	port = process.argv[2],
	file = process.argv[3];


var server = http.createServer(function(req, res){
	console.log("connecting");
	var stream = fs.createReadStream(file);
	stream.pipe(res);
});

server.listen(port);