// ======================================================================================= //
//                                 Extract a function 2                                    //
// ======================================================================================= //

// Start below:

// ======================================================================================= //
// Given the following code:                                                               //
//                                                                                         //
// const fs = require('fs');                                                               //
// const gm = require('gm');                                                               //
// const request = require('request');                                                     //
//                                                                                         //
// const url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';    //
// const filename = 'js-logo.png';                                                         //
// const thumbnailFilename = 'js-logo-small.png';                                          //
// const requestOptions = {                                                                //
//   url: url,                                                                             //
//   encoding: null                                                                        //
// };                                                                                      //
// request(requestOptions, (err, response, data) => {                                      //
//   if (err) {                                                                            //
//     console.log(err.message);                                                           //
//     return;                                                                             //
//   }                                                                                     //
//                                                                                         //
//   fs.writeFile(filename, data, (err) => {                                               //
//     if (err) {                                                                          //
//       console.log(err.message);                                                         //
//       return;                                                                           //
//     }                                                                                   //
//     gm(filename)                                                                        //
//       .resize(240, 240)                                                                 //
//       .write(thumbnailFilename, (err) => {                                              //
//         if (err) {                                                                      //
//           console.log(err.message);                                                     //
//           return;                                                                       //
//         }                                                                               //
//         console.log('It worked');                                                       //
//       });                                                                               //
//   });                                                                                   //
// });                                                                                     //
//                                                                                         //
// In order to run the above code you need to install:                                     //
//                                                                                         //
// Homebrew                                                                                //
// graphicsmagick - brew install graphicsmagick                                            //
// the gm module - npm install gm                                                          //
//                                                                                         //
// Extract a reusable function downloadAndCreateThumbnail(imageUrl, filename,              //
// thumbnailFilename, callback). You should be able to use the function like so:           //
//                                                                                         //
// var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';      //
// var filename = 'js-logo.png';                                                           //
// var thumbnailFilename = 'js-logo-small.png';                                            //
// downloadAndCreateThumbnail(url, filename, thumbnailFilename, (err) => {                 //
//   if (err) {                                                                            //
//     console.log(err.message);                                                           //
//     return;                                                                             //
//   }                                                                                     //
//   console.log('It worked');                                                             //
// })                                                                                      //
// ======================================================================================= //

const fs = require('fs');
const gm = require('gm');
const request = require('request');

const url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
const filename = 'js-logo.png';
const thumbnailFilename = 'js-logo-small.png';
const requestOptions = {
    url: url,
    encoding: null
};

let downloadAndCreateThumbnail = (imageUrl, filename, thumbnailFilename, callback) => {
    request(requestOptions, (error, response, data) => {
        fs.writeFile(filename, data, (error) => {
            gm(filename).resize(240, 240).write(thumbnailFilename, (error) => {
                callback(error);
            })
        });
    });
};

downloadAndCreateThumbnail(url, filename, thumbnailFilename, (error) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log('Image downloaded and resized! Go check it out! :)')
});