require('dotenv/config');
const tmi = require('tmi.js');
const MessageHandler = require('./messageHandler.js');

class Connection {
    constructor(io){
        this.io = io;
        this.client = new tmi.Client({
            options: { debug: true },
            connection: {
                secure: true,
                reconnect: true
            },
            identity: {
                username: process.env.NICK,
                password: process.env.IRC_TOKEN
            },
            channels: [ process.env.INITIAL_CHANNEL ]
        });
        this.client.connect();
        this.messageHandler = new MessageHandler(this.client, this.io);
        this.client.on('message', (channel, tags, message, self) => {
            if(self) return;
            this.messageHandler.Handle(message, channel, tags);
        });
    }
    async ListenHandleIo(msg)
    {
        this.messageHandler.HandleDataBase(msg);
    }
}

module.exports = Connection;