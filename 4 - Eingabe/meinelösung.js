let eingabefeld = document.querySelector(".eingabefeld");
let absenden = document.querySelector(".absenden");
let ausgabefeld = document.querySelector(".ausgabefeld");
let ul = document.querySelector(".list-group");

//absenden.addEventListener("mouseup", übertragen);

function übertragen() {
    ausgabefeld.innerHTML = eingabefeld.value;
}

absenden.addEventListener("mouseup", neuerEintrag);

function neuerEintrag() {
    let newLi = document.createElement("li");
    newLi.classList.add("list-group-item");
    console.log(newLi);
    newLi.innerHTML = eingabefeld.value;
    ul.appendChild(newLi);
}