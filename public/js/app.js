var socket = io();
let form = document.getElementById('form');
const body = document.getElementById('chat__body');
const main = document.getElementById('main');
let button = document.getElementById('chat__button');
let input = document.getElementById('chat__input');

/*
function validate () {

    const dangerAlert = document.createElement("div");
    dangerAlert.className += 'chat__alert chat__alert__danger';
    dangerAlert.innerHTML = "Unesi poruku"

    if (msg === '') {
        main.prepend(dangerAlert);
        parent.removeChild(chtmsg);
    } 

}

button.addEventListener("click", function() {
    msg = input.value;
    let chtMsg = document.createElement("p");
    chtMsg.className += 'chat__message chat__message__primary';
    chtMsg.append(msg);
    body.append(chtMsg);
    input.value = "";
});
*/


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
});


socket.on('chat message', function(msg) {
    let chtMsg = document.createElement("p");
    chtMsg.textContent = msg;
    chtMsg.className += 'chat__message chat__message__primary';
    body.appendChild(chtMsg);
    window.scrollTo(0, document.body.scrollHeight);
});