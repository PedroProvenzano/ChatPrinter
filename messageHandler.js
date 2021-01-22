const { response } = require('express');
require('dotenv/config');
class MessageHandler{
    constructor(client, io){
        this.io = io;
        this.client = client;
        this.usersOrder = [];
        this.isOpen = true;
    }
    async HandleDataBase(msg)
    {

    }
    async Handle(message, channel, tags){
        let streamer = channel.slice(1);
        let msg = message.toLowerCase();
        let startWith = msg[0];
        if(startWith == '!')
        {
            return;
        }
        let messageSend = {
            username: tags.username,
            streamer: streamer,
            msg: msg
        }
        this.io.emit('newMsg', messageSend);
    }
}

module.exports = MessageHandler;