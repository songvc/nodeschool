var fs = require("fs"),
	path = require("path");

function filterFiles(dir, ext, callback){
	
	ext = "." + ext; 

	fs.readdir(dir, function(error,files){

        var filtered = [];

		if(error) return callback(err);

        files.forEach(function(file){
        
            if(path.extname(file) === ext){
                filtered.push(file);
            }
        })

        return callback(null, filtered);
	})
}

module.exports = filterFiles;