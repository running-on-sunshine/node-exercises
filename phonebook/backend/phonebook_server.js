const http= require('http');
const fs = require('fs');

let generateRandomId = () =>
    Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

let contacts = {
    "1234": {
        id: "1234",
        phone: "111-111-1111",
        name: "FriendlyTest1",
        address: "111 Over the Rainbow Ave."
    },
    "5678": {
        id: "5678",
        phone: "222-222-2222",
        name: "FriendlyTest2",
        address: "222 Over the Rainbow Ave."
    },
};

let readBody = (req, callback) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        callback(body);
    });
};

let getContacts = (req, res) => {
    res.end(JSON.stringify(contacts));
};

let getContact = (req, res, matches) => {
    let id = matches[0];
    res.end(JSON.stringify(contacts[id]));
};

let deleteContact = (req, res, matches) => {
    let id = matches[0];
    delete contacts[id];
    res.end('Deleted contact successfully!');
};

let createContact = (req, res) => {
    readBody(req, (body) => {
        let contact = JSON.parse(body);
        let id = generateRandomId();
        contact.id = id;
        contacts[id] = contact;
        res.end(JSON.stringify(contact));
    });
};

let notFound = (req, res) => {
    res.end('404: No contact found. :(')
};

let routes = [
    {
        method: 'GET',
        url: /^\/contacts\/([0-9]+)$/,
        run: getContact
    },
    {
        method: 'DELETE',
        url: /^\/contacts\/([0-9]+)$/,
        run: deleteContact
    },
    {
        method: 'GET',
        url: /^\/contacts\/?$/,
        run: getContacts
    },
    {
        method: 'POST',
        url: /^\/contacts\/?$/,
        run: createContact
    },
    {
        method: 'GET',
        url: /^.*$/,
        run: notFound
    }
];

let server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('../frontend/index.html', (error, data) => {
            res.end(data);
        })
    }
    else if (req.url === '/index.js') {
        fs.readFile('../frontend/index.js', (error, data) => {
            res.end(data);
        })
    }
    else {
        let route = routes.find(route =>
        route.url.test(req.url) && req.method === route.method
        );
        let matches = route.url.exec(req.url);
        route.run(req, res, matches.slice(1));
    }
});

server.listen(3000);