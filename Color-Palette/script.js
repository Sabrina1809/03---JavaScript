//hier kommt die Logik für unsere Color-palette
import colors from './color.js'



let bodyContainer = document.querySelector(".bodyContainer");
console.log(colors);

for (let i = 0; i <=colors.length; i++) {

    let farbe = colors[i].hex;
    let farbtext = colors[i].name;
    

    let profilCard = document.createElement("div");
    profilCard.classList.add("profil-card");
    profilCard.innerText = farbe;
    profilCard.style.backgroundColor = farbe;
    // console.log(profilCard);

    let cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = farbtext;
    // console.log(cardDescription);

    let card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(profilCard);
    card.appendChild(cardDescription);
    // console.log(card);
    
    bodyContainer.appendChild(card);
    

}
// cardErstellen(i);
console.log(bodyContainer);

// function cardErstellen(i) {
//     i = 0;
//     let farbe = colors[i].hex;
//     let farbtext = colors[i].name;

//     let profilCard = document.createElement("div");
//     profilCard.classList.add("profil-card");
//     profilCard.innerText = farbe;
//     profilCard.style.backgroundColor = farbe;
//     // console.log(profilCard);

//     let cardDescription = document.createElement("div");
//     cardDescription.classList.add("card-description");
//     cardDescription.textContent = farbtext;
//     // console.log(cardDescription);

//     let card = document.createElement("div");
//     card.classList.add("card");
//     card.appendChild(profilCard);
//     card.appendChild(cardDescription);
//     // console.log(card);
    
//     bodyContainer.appendChild(card);
// }

console.log(colors);



