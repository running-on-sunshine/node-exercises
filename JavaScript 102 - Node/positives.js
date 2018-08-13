// ======================================================================= //
//                           Just the positives                            //
// ======================================================================= //

// Write a function positiveNumbers which is given an array of numbers 
// and returns a new array containing only the positive numbers within 
// the given array.

var positiveNumbers = function (numList) {
    var newNumList = [];

    for (i = 0; i < numList.length; i++) {
        if (numList[i] >= 0) {
            newNumList.push(numList[i]);
        }
    }
    return newNumList;
  };

  // ---------------- Test cases: -----------------

//   var numList = [1, -3, 5, -3, 0];
//   var numList = [1, 2, 3];
//   var numList = [-1, -2, -3];

//   var printPositives = positiveNumbers(numList);

//   console.log(printPositives);

module.exports = positiveNumbers;