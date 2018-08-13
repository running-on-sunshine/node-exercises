// ======================================================================= //
//                 JavaScript 102 Exercises...in Node!                     //
// ======================================================================= //

// Start below:

// ======================================================================= //
// Port all of your JavaScript 102 solutions to Node. To do this, put each //
// problem solution into a separate file, then require each file from a    //
// single file called test.js.                                             //
//                                                                         //
// When you execute node test.js, it should require() all the other files  //
// and run the functions you defined. You will need to export the main     //
// function from each file, then invoke it in test.js.                     //
//                                                                         //
// Use the require('assert') module to write assertions that exercise all  //
// your solutions in test.js.                                              //
// ======================================================================= //

// let assert = require('assert');

var numbers = require('./print_numbers');
var square = require('./print_square');
var box = require('./print_box');
var factors = require('./factor_number');
var leet = require('./leetspeak');
var vowels = require('./long_vowels');
var sum = require('./sum_numbers');
var positives = require('./positives');

console.log(numbers(1,10));
console.log(square(5));
console.log(box(6, 4));
console.log(factors(10));
console.log(leet('Hello, friend!'));
console.log(vowels('Cheese', 5));
console.log(sum([1, 4, 8]));
console.log(positives([1, -3, 5, -3, 0]));