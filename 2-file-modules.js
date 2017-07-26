var mathfun = require('./mathfun');

var processResults = function(err, results, time) {
	if(err){
		console.log("Error : " + err.message);
	} else {
		console.log("The results are: " + results + " (" + time + " ms)");
	}
};

for(var i = 1 ; i <= 5 ; i++){
	console.log("Call 'evenDoubler' with parameter '" + i + "'");
	mathfun.evenDoubler(i, processResults);
}

console.log("------");

console.log("The 'foo' variable from 'mathfun' = " + mathfun.foo);

console.log("The 'maxTime' variable is not exported in 'mathfun.js' file : " + mathfun.maxTime);