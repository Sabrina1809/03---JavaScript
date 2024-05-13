let time = document.getElementById("time");

let now = new Date();

let jahr = now.getFullYear();
let mon = now.getMonth();
let tag = now.getDate();
let stunde = now.getHours();
let minute = now.getMinutes();
let sek = now.getSeconds();

switch (mon) {
    case 0:
        mon = "Jan";
        break;
    case 1:
        mon = "Feb";
        break;
    case 2:
        mon = "Mrz";
        break;
    case 3:
        mon = "Apr";
        break;
    case 4:
        mon = "Mai";
        break;
    case 5:
        mon = "Jun";
        break;
    case 6:
        mon = "Jul";
        break;
    case 7:
        mon = "Aug";
        break;
    case 8:
        mon = "Sep";
        break;
    case 9:
        mon = "Okt";
        break;
    case 10:
        mon = "Nov";
        break;
    case 11:
        mon = "Dez";
        break;
}

let zweistelligTag = String(tag).padStart(2, '0'); 

function umwandeln() {
    let tagXX = String(tag).padStart(2, '0');
    let stundeXX = String(stunde).padStart(2, '0');
    let minuteXX = String(minute).padStart(2, '0');
    let sekundeXX = String(sek).padStart(2, '0');

    let ueberschrift = 
`${jahr}-${mon}-${tagXX}
${stundeXX}:${minuteXX}:${sekundeXX}`;

    time.innerText = ueberschrift; 
    console.log(ueberschrift);
}
umwandeln();





let bl1api = 'https://api.openligadb.de/getmatchdata/bl1/2023/33'; 
let bl2api = 'https://api.openligadb.de/getmatchdata/bl2/2023/33'; 
let bl3api = 'https://api.openligadb.de/getmatchdata/bl3/2023/37'; 

let team1 = "Offenburg";
let team2 = "Unzhurst";
let toreTeam1 = 5;
let toreTeam2 = 1;

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

function replaceData(data) {
    team1.innerText = `${data[0].team1.teamName}`;
    console.log(team1);
    team2.innerText = `${data[0].team2.teamName}`;
    console.log(team2);
    //----------------------------------------------------
    // toreTeam1.innerText = data[0].goals.scoreTeam1; //Tore werden nciht ausgegeben
    // console.log(toreTeam1);   ///
    // console.log(data);
}


function bl1() {
    fetch(bl1api)   
    .then((res) => res.json())
    .then((data) => replaceData(data));
    
}
// bl1();

function bl2() {
    fetch(bl2api)   
    .then((res) => res.json())
    .then((data) => replaceData(data));
    
}
// bl2();

function bl3() {
    fetch(bl3api)   
    .then((res) => res.json())
    .then((data) => replaceData(data));
    
}
// bl3();


let ligaInput = document.querySelector('#ligaInput');

ligaInput.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        if (ligaInput.value === "bl1") {
            bl1();
            // function getData() {
            //     fetch(bl1api)   
            //     .then((res) => res.json())
            //     .then((data) => console.log(data));
            // }
            // getData();
        } else if (ligaInput.value === "bl2") {
            function getData() {
                fetch(bl2api)   
                .then((res) => res.json())
                .then((data) => console.log(data));
            }
            getData();
        } else if (ligaInput.value === "bl3") {
            function getData() {
                fetch(bl3api)   
                .then((res) => res.json())
                .then((data) => console.log(data));
            }
            getData();
        } else {
            console.log("Eingabe überprüfen!");
        }
    }}
);



li.appendChild(pTeam);
li.appendChild(pTore);
ul.appendChild(li);
console.log(ul);
console.log(li);

