// ======================================================================= //
//                          Extract a function                             //
// ======================================================================= //

// Start below:

// ======================================================================= //
// Given this code:                                                        //
//                                                                         //
// const request = require('request');                                     //
// const fs = require('fs');                                               //
//                                                                         //
// const url = 'https://en.wikipedia.org/wiki/Continuation-passing_style'; //
// const filename = 'output.html';                                         //
//                                                                         //
// request.get(url, (err, response, html) => {                             //
//   if (err) {                                                            //
//     console.log(err.message);                                           //
//     return;                                                             //
//   }                                                                     //
//   fs.writeFile(filename, html,(err) => {                                //
//     if (err) {                                                          //
//       console.log(err.message);                                         //
//       return;                                                           //
//     }                                                                   //
//     console.log('It worked');                                           //
//   });                                                                   //
// });                                                                     //
//                                                                         //
// Extract a reusable function saveWebPage(url, filename, callback). You   //
// should be able to use the function like so:                             //
//                                                                         //
// saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', //
// 'output.txt', (err) => {                                                //
//   if (err) {                                                            //
//     console.log(err.message);                                           //
//     return;                                                             //
//   }                                                                     //
//   console.log('It worked.');                                            //
// });                                                                     //
// ======================================================================= //

const request = require('request');
const fs = require('fs');

const url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
const filename = 'output.html';

let saveWebPage = function (url, filename) {
    request.get(url, function (error, response, html) {
        if (error) {
            console.log(error.message);
            return;
        }
        fs.writeFile(filename, html, function (error) {
            if (error) {
                console.log(error.message);
                return;
            }
            console.log('Web page saved!');
        });
    });
};

saveWebPage(url, filename);