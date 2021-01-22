var socket = io();
const contenedorChat = document.getElementById('contenedor-chat');


socket.on('newMsg', message => {
    let div = document.createElement('div');
    div.setAttribute("class", "mensaje");
    let pUno = document.createElement('p');
    pUno.innerText = message.username;
    let pDos = document.createElement('p');
    pDos.innerText = message.msg;
    div.appendChild(pUno);
    div.appendChild(pDos);
    contenedorChat.appendChild(div);
});