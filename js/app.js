const body = document.getElementById('chat__body');
let button = document.getElementById('chat__button');
let input = document.getElementById('chat__input');

button.addEventListener("click", function() {
    msg = input.value;
    let chtmsg = document.createElement("p");
    chtmsg.className += 'chat__message chat__message__primary';
    chtmsg.append(msg);
    body.append(chtmsg);
});