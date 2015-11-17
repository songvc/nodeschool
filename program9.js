var http = require("http"),
	concatStream = require("concat-stream"),
	first = process.argv[2],
	second = process.argv[3],
	third = process.argv[4];

var quenue = [first,second,third],
	result = [];

// console.log(quenue);

//helper methods

function runSeries(element){
	if (element){
		http.get(element, function(res){
			res.setEncoding('utf8');
			res.pipe(concatStream(function(data){
				console.log(data);

			}))
			return runSeries(quenue.shift());
		})
	}else{
	}
}

runSeries(quenue.shift());


