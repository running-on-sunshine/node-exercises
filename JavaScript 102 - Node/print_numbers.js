// ======================================================================= //
//                              Print Numbers                              //
// ======================================================================= //

// Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line:

//====================================================//
//              Print Numbers : For Loop              //
//====================================================//

var printNumbers = function (num1, num2) {
    var count; 
    for (count = num1; count <= num2; count++) {
        console.log(count); 
    }
};

// var num1 = 1;
// var num2 = 10;

// printNumbers(num1, num2);

module.exports = printNumbers;