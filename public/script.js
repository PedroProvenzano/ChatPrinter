var socket = io();
const contenedorChat = document.getElementById('contenedor-chat');


socket.on('newMsg', message => {
    let username = mayusmaker(message.username);
    let div = document.createElement('div');
    div.setAttribute("class", "mensaje");
    let pUno = document.createElement('p');
    pUno.innerText = username;
    let pDos = document.createElement('p');
    pDos.setAttribute('class', 'msgCont');
    pDos.innerText = message.msg;
    div.appendChild(pUno);
    div.appendChild(pDos);
    contenedorChat.insertBefore(div, contenedorChat.firstChild);
});


function mayusmaker(name)
{
    let username = name.slice(1);
    let firstLetter = name[0].toUpperCase();
    return firstLetter + username;
}