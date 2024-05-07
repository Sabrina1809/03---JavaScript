const header = document.querySelector("h1");
const container = document.createElement("div");
console.log(container);
container.style.height = "40vh";
container.style.backgroundColor = "blue";
document.querySelector("body").appendChild(container);
header.style.color = "red";


let alter = prompt("Bitte gebe dein Alter in Jahren ein");
console.log(`Du bist ${alter} Jahre alt`);

let monate = alter * 12;
console.log(monate);

let tage = alter * 365;
console.log(tage);

let stunden = alter * 365 * 24;
console.log(stunden);

console.log(`${alter} Jahre entsprechen ${monate} Monaten, ${tage} Tagen und ${stunden} Stunden.`);

alter <= 0 ? console.log(`Ist das nicht ein bisschen jung? Nachrechnen!`) : console.log(`Geht klar!`);

if (alter > 0) {
    console.log(`Geht klar!`);
} else {
    console.error(`Ist das nicht ein bisschen jung? Nachrechnen!`);
    
}

