// server.js

const express = require('express');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });
randomColor = function() {
  return result = '#' + Math.floor(Math.random()*16777215).toString(16);
}

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
        client.send(data);
    }
  });
};
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  wss.broadcast(JSON.stringify({type:"incomingUser", length: wss.clients.size, color: randomColor()}));

  ws.on('message', function incoming(data) {
    const n_data  = JSON.parse(data);
    n_data.id = uuidv1();
    n_data.username ? n_data.type = "incomingMessage" : n_data.type = "incomingNotification";
    console.log(n_data);
    wss.broadcast(JSON.stringify(n_data));
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    wss.broadcast(JSON.stringify({type:"incomingUser", length: wss.clients.size}));
  });
});