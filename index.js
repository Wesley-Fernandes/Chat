const { log } = require('console');
const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const PORTA = 3000;


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
    socket.on("chat message", (msg)=>{
        console.log(msg.horas);
        io.emit("chat message", msg);
    })
    console.log("Um usuario foi conectado com sucesso ao servidor WS.");
})

server.listen(PORTA, ()=>{
    console.log(`Servidor operando na porta: ${PORTA}`);
});