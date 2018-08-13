// ======================================================================= //
//                             Factor a Number                             //
// ======================================================================= //

// Write a function factors which is given a number and returns an array 
// containing all its factors.

var printFactors = function (num) {
    var factorsList = [];
    var count = 1;
    
	while (count <= num) {
		if (num % count == 0) {
			factorsList.push(count);
		}
		count++;
    }
	return factorsList;	
};

// var num = 10;

// var printFactors = factors(num);

// console.log(printFactors);

module.exports = printFactors;