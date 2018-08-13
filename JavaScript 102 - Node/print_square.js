// ======================================================================= //
//                              Print a Square                             //
// ======================================================================= //

// Write a function printSquare which is given a size and
// prints a square of that size using asterisks.

var printSquare = function (size) {
    for (var i = 0; i < size; i++) {
        var str = '';

        for (var j = 0; j < size; j++) {
            str += '*';
        }
        console.log(str);
    }
};

// var size = 5;

// printSquare(size);

module.exports = printSquare;