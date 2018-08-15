var fs = require('fs');
var readline = require('readline');
var phonebookFile = "phonebook.json";
var phonebook;

var rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

var menu = 
`
Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit
`;

var createMenu = function () {
    console.log(menu);
};

var readPhoneFile = function () {
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

var main = function () {
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

var lookupEntry = function () {
    rl.question("Name: ", function(name) {
        if (phonebook.hasOwnProperty(name)) {
            console.log(`Found entry for ${name}:${phonebook[name]}`);
        }
        else {
            console.log(`No entry found for ${name}`);
        }
        main();
    });
};

var setEntry = function () {
    rl.question("Name: ", function(name) {
        rl.question("Phone Number: ", function(phoneNumber) {
            phonebook[name] = phoneNumber;
            console.log(`Entry stored for ${name}`);
            main();
        });
    });
};

var goodbye = function () {
    console.log("Bye!");
    fs.writeFile(phonebookFile, JSON.stringify(phonebook), function() {
        process.exit();
    });
};