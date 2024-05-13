//hier kommt die Logik für unsere Color-palette
import colors from './color.js'

let bodyContainer = document.querySelector(".bodyContainer");


colors.forEach((color) => {
    cardErstellen();   
}) 

console.log(bodyContainer);

function cardErstellen() {
    let profilCard = document.createElement("div");
    profilCard.classList.add("profil-card");
    // console.log(profilCard);

    let cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    // console.log(cardDescription);

    let card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(profilCard);
    card.appendChild(cardDescription);
    // console.log(card);
   
    bodyContainer.appendChild(card);

}