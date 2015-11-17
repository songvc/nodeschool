var net = require("net");
var arg = process.argv[2]

var server = net.createServer(function(socket){
	var today = new Date();
	var hh = today.getHours();
	var minute = today.getUTCMinutes();
	var dd = today.getDate();
	var month = today.getMonth()+1;
	var yyyy = today.getFullYear();
	var fullToday = yyyy + "-" + month + "-" + dd + " " + hh + ":" + minute;

	socket.write(fullToday);
	socket.write("\n");
	socket.end();
})
server.listen(arg);

