// ======================================================================= //
//                             Resize an image                             //
// ======================================================================= //

// Start below:

// ======================================================================= //
// Write a program to download the JavaScript logo from                    //
// https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png,  //
// and resize it using the gm module to the size 240x240. You might use    //
// the request module to download the file. Hint: You will set the         //
// encoding option to null for request.                                    //
//                                                                         //
// Example:                                                                //
//                                                                         //
// var options = {                                                         //
//   url: 'http://example.com/example.png',                                //
//   encoding: null                                                        //
// };                                                                      //
// request(options, function(err, response, imageData) {                   //
//   // save image data and resize                                         //
// });                                                                     //
// ======================================================================= //

const gm = require('gm');
const request = require('request');
let resizedImageFile = 'JS-logo-resized.png';
let options = {
      url: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",                                //
      encoding: null    
}; 

request(options, (error, response, imageData) => {
    if (error) {
        console.log(error.message);
        return;
    }
    gm(imageData).resize(240, 240).write(resizedImageFile, (error) => {
        if (error) {
            console.log(error.message);
        }
        else {
            console.log('Image resized! Yay! :)');
        }
    });
});