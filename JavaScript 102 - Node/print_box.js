// ======================================================================= //
//                              Print a box                                //
// ======================================================================= //

var printBox = function (width, height) {
    for (var i = 0; i < height; i++) {
        var str = '';

        for (var j = 0; j < width; j++) {
            if (i === 0 || j === 0 || i === (height-1) || j === (width-1)) {
                str += '*';
            }
            else {
                str += ' ';
            }
        }
        console.log(str);
    }
};

// var width = 6;
// var height = 4;

// printBox(width, height);

module.exports = printBox;