//hier kommt die Logik für unsere Color-palette
import colors from './color.js'

let container = document.querySelector(".bodyContainer");
console.log(colors);

for (let i = 0; i < colors.length; i++) {

    let card = document.createElement("div");
    card.classList.add("card");

    let cardColor = document.createElement("div");
    cardColor.classList.add("profil-card");
    cardColor.style.backgroundColor = colors[i].hex;

    let cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    cardDescription.innerText = colors[i].name;

    let description = document.createElement("p");
    description.classList.add("description");

    cardDescription.appendChild(description);
    card.appendChild(cardColor);
    card.appendChild(cardDescription);
    container.appendChild(card);
}

console.log(container);

let button = document.querySelector(".button");
button.addEventListener("click", farbselektor);

function farbselektor() {
    let farbeInput = document.querySelector("#color").value;
    //weiter weiß ich noch nicht


    
}
