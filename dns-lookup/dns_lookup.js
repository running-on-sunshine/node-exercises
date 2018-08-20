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

const dns = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Domain name: ', (domain) => {
    rl.close();

    dns.lookup(domain, (error, address) => {
        if (error) {
            console.log(error.message);
            return;
        }
        console.log(`IP Address: ${address}`);
    });
});

// ---------------------------------------------------- //
//              Without Readline Interface              //
// ---------------------------------------------------- //

// const dns = require('dns');
// const domainName = 'yahoo.com';

// dns.lookup(domainName, (error, address) => {
//     console.log(`Domain name: ${domainName}`);
    
//     if (error) {
//         console.log(error.message);
//         return;
//     }
//     console.log(`IP Address: ${address}`);
// });