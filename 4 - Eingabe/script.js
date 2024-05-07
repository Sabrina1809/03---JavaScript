let eingabefeld = document.querySelector(".eingabefeld"); 
let ausgabefeld = document.querySelector(".ausgabefeld");
let button = document.querySelector(".absenden");

button.addEventListener('click', textübergabe);

function textübergabe() {
    let eingabe = eingabefeld.value;
    ausgabefeld.textContent = eingabe;
}


