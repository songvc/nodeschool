var http = require("http"),
	concatStream = require("concat-stream"),
	url = process.argv[2];

function handleError(err){
	console.error(err);
}


http.get(url, function(res){
	
	res.setEncoding('utf8');
	// res.on("data",function(data){
	// 	console.log(data);

	// })
	res.pipe(concatStream(function(data){
		console.log(data.length);
		console.log(data);
	}))
	res.on('error', handleError);

})

