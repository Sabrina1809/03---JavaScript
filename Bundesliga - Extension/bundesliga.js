let time = document.getElementById("time");

let now = new Date();
console.log(now);

let jahr = now.getFullYear();
console.log(jahr);
let mon = now.getMonth();
console.log(mon);
let tag = now.getDate();
console.log(tag);
let stunde = now.getHours();
console.log(stunde);
let minute = now.getMinutes();
console.log(minute);
let sek = now.getSeconds();
console.log(sek);

switch (mon) {
    case 0:
        mon = "Jan";
        console.log(mon);
        break;
    case 1:
        mon = "Feb";
        console.log(mon);
        break;
    case 2:
        mon = "Mrz";
        console.log(mon);
        break;
    case 3:
        mon = "Apr";
        console.log(mon);
        break;
    case 4:
        mon = "Mai";
        console.log(mon);
        break;
    case 5:
        mon = "Jun";
        console.log(mon);
        break;
    case 6:
        mon = "Jul";
        console.log(mon);
        break;
    case 7:
        mon = "Aug";
        console.log(mon);
        break;
    case 8:
        mon = "Sep";
        console.log(mon);
        break;
    case 9:
        mon = "Okt";
        console.log(mon);
        break;
    case 10:
        mon = "Nov";
        console.log(mon);
        break;
    case 11:
        mon = "Dez";
        console.log(mon);
        break;
}

let zweistelligTag = String(tag).padStart(2, '0'); 
console.log(zweistelligTag);


function umwandeln() {
    let tagXX = String(tag).padStart(2, '0');
    let stundeXX = String(stunde).padStart(2, '0');
    let minuteXX = String(minute).padStart(2, '0');
    let sekundeXX = String(sek).padStart(2, '0');
    console.log(tagXX);
    console.log(stundeXX);
    console.log(minuteXX);
    console.log(sekundeXX);

    let ueberschrift = 
`${jahr}-${mon}-${tagXX}
${stundeXX}:${minuteXX}:${sekundeXX}`;
    console.log(ueberschrift);

    time.innerText = ueberschrift; 
}
umwandeln();

