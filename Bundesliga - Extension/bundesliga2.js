const team1 = "Offenburg";
const team2 = "Unzhurst";
const toreTeam1 = 5;
const toreTeam2 = 1;

let team = (`${team1} vs ${team2}`).toString();
let tore = (`${toreTeam1}:${toreTeam2}`).toString();


const ul = document.querySelector('.list');  //ul

let li = document.createElement('li');
li.className = "spiel";

let pTeam = document.createElement('p');
pTeam.className = "team";
pTeam.innerText = team;
console.log(team);

let pTore = document.createElement('p');
pTore.className = "tore";
pTore.innerText = tore;
console.log(tore);


li.appendChild(pTeam);
li.appendChild(pTore);
ul.appendChild(li);
console.log(ul);
console.log(li);

