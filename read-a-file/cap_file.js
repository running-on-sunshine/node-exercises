// ======================================================================= //
//                              Read a file                                //
// ======================================================================= //

// Start below:

// ======================================================================= //
// Write a program that prompts the user to enter a file name, and reads   //
// in the contents of the file, convert the text to all caps, and prints   //
// it out.                                                                 //
//                                                                         //
// Assuming the file file1.txt contains the text: Hello, I am file 1..     //
// Example output:                                                         //
//                                                                         //
// $ node cap_file.js                                                      //
// filename: file1.txt                                                     //
// HELLO, I AM FILE 1.                                                     //
//                                                                         //
// Trigger an error condition by running the program on a non-existent     //
// file. Your program should display the error message, and it should      //
// display something like:                                                 //
//                                                                         //
// $ node cap_file.js                                                      //
// filename: blah.txt                                                      //
// ENOENT: no such file or directory, open 'blah.txt'                      //
// ======================================================================= //

// var fs = require('fs');
// var readline = require('readline');

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('filename: ', function(filename) {
//     rl.close();

//     fs.readFile(filename, 'utf-8', function(error, data) {
//         if (error) {
//             console.log(error.message);
//             return;
//         }
//         console.log(data.toUpperCase());
//     });
// });

// ---------------------------------------------------- //
//              Without Readline Interface              //
// ---------------------------------------------------- //

var fs = require('fs');
filename = 'file1.txt';

fs.readFile(filename, 'utf-8', function(error, data) {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(data.toUpperCase());
});