// ======================================================================= //
//                            Long-long Vowels                             //
// ======================================================================= //

// Write a function, which is given a string, return the result of extending
// any long vowels to the length of 5.

var longLongVowels = function (str, number) {
    var str;

    str = str.replace(/aa/, 'a'.repeat(number));
    str = str.replace(/ee/, 'e'.repeat(number));
    str = str.replace(/ii/, 'i'.repeat(number));
    str = str.replace(/oo/, 'o'.repeat(number));
    str = str.replace(/uu/, 'u'.repeat(number));

    return str;
  };

// ------------- Test cases:---------------

// var str = 'Good';
// var str = 'Cheese';
// var str = 'Man';

// var number = 5;
// var extendedVowels = longLongVowels(str, number);

// console.log(extendedVowels);

module.exports = longLongVowels;