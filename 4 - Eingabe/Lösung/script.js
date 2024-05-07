
document.querySelector(".btn").addEventListener("click", post);
document.addEventListener("keypress", keypress);

function keypress(event) {
    // console.log(event);
    if (event.keyCode === 13) {
        post();
    }
}

const eingabe = document.querySelector(".input");
//const textfeld = document.querySelector(".list-group-item");
const postContainer = document.querySelector(".list-group");

function post () {
    if (eingabe.value.length > 0) {

        //textfeld.innerText = eingabe.value;
        
        const neuerPost = document.createElement("li");
        neuerPost.innerText = eingabe.value;
        neuerPost.classList.add("list-group-item")
        postContainer.appendChild(neuerPost);

        //textfeld.parentElement.appendChild(neuerPost) // Funktioniert nur, wenn das Demo Element noch vorhanden ist.
    }

    eingabe.value = "";
}

/* document.querySelector(".btn").addEventListener("click", function () {
    if (eingabe.value.length > 0) {
        textfeld.innerText = eingabe.value;
    }

    eingabe.value = "";
}); */