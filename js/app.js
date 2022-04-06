const body = document.getElementById('chat__body');
const main = document.getElementById('main');
let button = document.getElementById('chat__button');
let input = document.getElementById('chat__input');

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
    validate()
    let chtMsg = document.createElement("p");
    chtMsg.className += 'chat__message chat__message__primary';
    chtMsg.append(msg);
    body.append(chtMsg);
    input.value = "";
});

