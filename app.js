const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const tmi = require('tmi.js');
require('dotenv/config');
const port = process.env.PORT;
const Client = require('./client.js');
const connection = new Client(io);

// Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
  
    socket.on('sendChat', (msg) => {
      connection.ListenHandleIo(msg);
    });
  });
  
  
  
http.listen(port, () => {
    console.log(`Conectado, en puerto ${port}`);
});