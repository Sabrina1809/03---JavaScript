import colors from './color.js'

const bodyContainer = document.querySelector(".bodyContainer");
const btn = document.querySelector("button");

//Onklick filtert nach Inputwert
btn.addEventListener("click",() => {
    const input_val = document.querySelector("input").value;
    //Erstmal Eingabewert ausgeben lassen
    //console.log(input_val);
    const filtered_colors = colors.filter((el)=> {
        return el.name === input_val.toUpperCase();
    })
    //kontrolliere gefiltertes Objekt
    //console.log(filtered_colors.length);
    if (filtered_colors.length != 0) {
        bodyContainer.textContent = '';
        filtered_colors.forEach((el)=> {
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            const div3 = document.createElement("div");

            div1.classList.add("card");
            div2.classList.add("profil-card");
            div2.style.backgroundColor = el.name;
            div3.classList.add("card-description");
            div3.innerText = el.name;
        
            div1.appendChild(div2);
            div1.appendChild(div3);
            bodyContainer.appendChild(div1);
        })
    } else {
        colors.forEach((el)=>{
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            const div3 = document.createElement("div");
        
            div1.classList.add("card");
            div2.classList.add("profil-card");
            div2.style.backgroundColor = el.name;
            div3.classList.add("card-description");
            div3.innerText = el.name;
        
            div1.appendChild(div2);
            div1.appendChild(div3);
            bodyContainer.appendChild(div1);
        })
    }

    

})

//Grundlegendes Rendern der Farben
colors.forEach((el)=>{
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    div1.classList.add("card");
    div2.classList.add("profil-card");
    div2.style.backgroundColor = el.name;
    div3.classList.add("card-description");
    div3.innerText = el.name;

    div1.appendChild(div2);
    div1.appendChild(div3);
    bodyContainer.appendChild(div1);
})

