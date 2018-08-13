// ======================================================================= //
//                                Leetspeak                                //
// ======================================================================= //

// Write a function leetspeak which is given a string, and returns the 
// leetspeak equivalent of the string. 

// To convert text to its leetspeak version, make the following substitutions:

// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7

var leetSpeak = function (str) {

    var str = str.toLowerCase();

    str = str.replace(/a/, 4);
    str = str.replace(/e/, 3);
    str = str.replace(/g/, 6);
    str = str.replace(/i/, 1);
    str = str.replace(/o/, 0);
    str = str.replace(/s/, 5);
    str = str.replace(/t/, 7);

    return str;
};

// ------------- Test cases:---------------

// var str = 'Leet';
// var str = 'Hello, friend!';

// var convertToLeet = leetSpeek(str);

// console.log(convertToLeet);

module.exports = leetSpeak;