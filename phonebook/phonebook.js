const fs = require('fs');
const readline = require('readline');
let phonebookFile = "phonebook.json";
let phonebook;

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

let menu = 
`
Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit
`;

let createMenu = function () {
    console.log(menu);
};

let readPhoneFile = function () {
    fs.readFile(phonebookFile, 'utf-8', function(error, data) {
        if (data !== "") {
            phonebook = JSON.parse(data);
        } else {
            phonebook = {};
        }
        main();
    });
};
readPhoneFile();

let main = function () {
    createMenu();
    rl.question("What would you like to do? ", function(input) {
        if (input === "1") {
            lookupEntry();
        }
        if (input === "2") {
            setEntry();
        }
        if (input === "3") {
            deleteEntry();
        }
        if (input === "4") {
            listAllEntries();
        }
        if (input === "5") {
            goodbye();
        }
    });
};

let lookupEntry = function () {
    rl.question("Name: ", function(name) {
        if (phonebook.hasOwnProperty(name)) {
            console.log(`Found entry for ${name}: ${phonebook[name]}`);
        }
        else {
            console.log(`No entry found for ${name}`);
        }
        main();
    });
};

let setEntry = function () {
    rl.question("Name: ", function(name) {
        rl.question("Phone Number: ", function(phoneNumber) {
            phonebook[name] = phoneNumber;
            console.log(`Entry stored for ${name}`);
            main();
        });
    });
};

let deleteEntry = function () {
    rl.question("Name: ", function(name) {
        if (phonebook.hasOwnProperty(name)) {
            console.log(`Deleted entry for ${name}: ${phonebook[name]}`);
            delete phonebook[name];
        }
        else {
            console.log(`No entry found for ${name}`);
        }
        main();
    });
};

let listAllEntries = function () {
    for (var name in phonebook) {
        console.log(`${name}: ${phonebook[name]}`);
    }
    main();
};

let goodbye = function () {
    console.log("Bye!");
    fs.writeFile(phonebookFile, JSON.stringify(phonebook), function() {
        process.exit();
    });
};