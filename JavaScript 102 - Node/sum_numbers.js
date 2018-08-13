// ======================================================================= //
//                             Sum the numbers                             //
// ======================================================================= //

// Write a function sumNumbers which is given an array of numbers 
// and returns the sum of the numbers.

var sumNumbers = function (numList) {
    var sum = 0;
    for (var i = 0; i < numList.length; i++) {
        sum += numList[i];
    }
    return sum;
};

// var numList = [1, 4, 8];

// var printSum = sumNumbers(numList);

// console.log(printSum);

module.exports = sumNumbers;