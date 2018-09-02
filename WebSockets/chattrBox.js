const WS = require('ws');

let ws = new WS.Server({ port: 3001 });

ws.on('connection', sender => {
    console.log('Hey there! Someone connected!');
    sender.on('message', message => {
        ws.clients.forEach(client => {
                client.send(message);
        })
    });
});