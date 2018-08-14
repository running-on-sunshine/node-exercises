// ======================================================================= //
//                            Read and write                               //
// ======================================================================= //

// Start below:

// ======================================================================= //
// Write a program to prompt the user for two file names, the first file   //
// will be the input and the second file will be the output. The program   //
// will read in the contents of the input file, convert its text to all    //
// caps, and then write the resulting contents to the output file.         //
//                                                                         //
// Example:                                                                //
//                                                                         //
// $ node cap_file_2.js                                                    //
// Input file: file1.txt                                                   //
// Output file: output.txt                                                 //
// Wrote to file output.txt                                                //
// As a result, output.txt should now contain the text HELLO, I AM FILE 1. //
//                                                                         //
// Trigger an error by running the program with an non-existing input      //
// file, ensure that the error is properly displayed. Trigger an error by  //
// running the program with an output file in a non-existant directory,    //
// such as thisdirdoesntexist/output.txt, ensure that the error is         //
// properly displayed.                                                     //
// ======================================================================= //

var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input file: ', function(input) {
    rl.question('Output file: ', function(output) {
        rl.close();

        fs.readFile(input, 'utf-8', function(inputError, data) {
            if (inputError) {
                console.log(inputError.message);
                return;
            }

            fs.writeFile(output, data.toUpperCase(), function(outputError) {
                if (outputError) {
                    console.log(outputError.message);
                    return;
                }
                console.log(`Wrote to file ${output}`);
            });
        });
    });
});