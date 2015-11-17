var http = require("http"),
	concatStream = require("concat-stream"),
	first = process.argv[2],
	second = process.argv[3],
	third = process.argv[4];

var quenue = [first,second,third],
	result = [];

//helper methods
function getHandler(res){
	res.setEncoding('utf8');
	res.pipe(concatStream(function(data){
		console.log(data.length);
		console.log(data);
	}))
	res.on('error',function(err){
		console.log(err.message);
	})
}

function runSeries(element){
	if (element){
		http.get(element, getHandler)
		return runSeries(quenue.shift());
	}else{
	}
}

runSeries(quenue.shift());


