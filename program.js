var arr = process.argv,
	sum = 0;
for (var i = 2; i < arr.length; i++){
	sum += parseInt(arr[i]);
	
}
console.log(sum);
console.log(process.argv);
console.log(process.argv[1]);