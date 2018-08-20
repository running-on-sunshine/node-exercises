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

var gm = require('gm');
var request = require('request');
var resizedImageFile = 'JS-logo-resized.png';
var options = {
      url: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",                                //
      encoding: null    
}; 

request(options, function(error, response, imageData) {
    if (error) {
        console.log(error.message);
        return;
    }
    gm(imageData).resize(240, 240).write(resizedImageFile, function (error) {
        if (error) {
            console.log(error.message);
        }
        else {
            console.log('Image resized! Yay! :)');
        }
    });
});