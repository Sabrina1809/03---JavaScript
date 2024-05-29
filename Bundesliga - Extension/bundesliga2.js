// ÜBERSCHRIFT*******************************************

let now = new Date();
let mon = now.getMonth();

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

function umwandelnÜberschrift() {
    let jahr = now.getFullYear();
    let tag = String(now.getDate()).padStart(2, '0');
    let stunde = String(now.getHours()).padStart(2, '0');
    let minute = String(now.getMinutes()).padStart(2, '0');
    let sekunde = String(now.getSeconds()).padStart(2, '0');

    let ueberschrift = 
`${jahr}-${mon}-${tag}
${stunde}:${minute}:${sekunde}`;

    document.getElementById("time").innerText = ueberschrift; 
    console.log(ueberschrift);
}
umwandelnÜberschrift();



// SPIELE*******************************************

let bl1api = 'https://api.openligadb.de/getmatchdata/bl1/2023/33'; 
let bl2api = 'https://api.openligadb.de/getmatchdata/bl2/2023/33'; 
let bl3api = 'https://api.openligadb.de/getmatchdata/bl3/2023/37'; 

let ligaInput = document.querySelector('#ligaInput');
ligaInput.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        if (ligaInput.value === "bl1") {
            bl1();
        } else if (ligaInput.value === "bl2") {
            bl2();
        } else if (ligaInput.value === "bl3") {
            bl3();
        } else {
            alert("Eingabe überprüfen!");
        }
    }}
);

function bl1() {
    fetch(bl1api)   
    .then((res) => res.json())
    .then((data) => replaceData(data));
}
function bl2() {
    fetch(bl2api)   
    .then((res) => res.json())
    .then((data) => replaceData(data));
}
function bl3() {
    fetch(bl3api)   
    .then((res) => res.json())
    .then((data) => replaceData(data));
}

const ul = document.querySelector('.list');  

function replaceData(data) {
        ul.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
        li.classList.add("spiel");
        
        let pteam = document.createElement("p");
        pteam.classList.add("team");
        pteam.textContent = 
        `${data[i].team1.teamName} vs ${data[i].team2.teamName}`;

        let ptore = document.createElement("p");
        ptore.classList.add("tore");
        ptore.textContent = 
        `${data[i].matchResults[1].pointsTeam1} vs ${data[i].matchResults[1].pointsTeam2}`;

        li.appendChild(pteam);
        li.appendChild(ptore);

        ul.appendChild(li);
    }
}



