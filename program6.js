var filterFiles = require("./program6.module.js");

filterFiles(process.argv[2], process.argv[3], function(err,files){
	if (err) return console.log(err);
	
	files.forEach(function(file){
		console.log(file);
	})

})