// ======================================================================= //
//                              DNS lookup                                 //
// ======================================================================= //

// Start below:

// ======================================================================= //
// Write a program that prompts the user for a domain name, looks up the   //
// IP address for the domain, and prints it out. Example:                  //
//                                                                         //
// $ node dns_lookup.js                                                    //
// Domain name: yahoo.com                                                  //
// IP Address: 98.139.183.24                                               //
// Trigger an error condition by providing an invalid domain. See that the //
// error gets displayed.                                                   //
// ======================================================================= //

var dns = require('dns');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Domain name: ', function(domain) {
    rl.close();

    dns.lookup(domain, function(error, address) {
        if (error) {
            console.log(error.message);
            return;
        }
        console.log(`IP Address: ${address}`);
    });
});