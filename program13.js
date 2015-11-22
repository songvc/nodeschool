var http = require('http'),
	url = require('url'),
	incomingport = process.argv[2];

var server = http.createServer(function(request,response){
	
	var path = url.parse(request.url, true).pathname;
	var q = url.parse(request.url, true).query.iso;

	var date = new Date(q);
	var unix = date.getTime();

	var J = {
		"hour" 		: date.getHours(),
		"minute"	: date.getMinutes(),
		"second"	: date.getSeconds()
	}

	var U = {
		"unixtime"	: unix
	}


	if (path == "/api/parsetime"){
		
		response.writeHead(200, {'Content-Type': 'application/json'});			
		response.end(JSON.stringify(J));

	}else if (path == "/api/unixtime"){
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify(U));

	}


});

server.listen(incomingport);
