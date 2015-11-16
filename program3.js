var fs = require("fs");
fs.readFile(process.argv[2], 'utf8' , function(err, file){
	if (err) throw err;
	console.log(file.split("\n").length-1);
})