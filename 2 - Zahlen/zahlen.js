const zahlen = [12, 34, 29, 120, 55];

//meine Variante
zahlen.sort((a, b) => a - b);
console.log(zahlen);  //12, 29, 34, 55, 120
let groessteZahl = zahlen[zahlen.length - 1];
console.log(groessteZahl);  //120
zahlen.sort((a, b) => b - a);
let kleinsteZahl = zahlen[zahlen.length - 1];
console.log(kleinsteZahl);  //12


//seine Variante
function highest(zahlenfolge) {
    let hoechsteZahl = null;
    for (let zahl of zahlenfolge) {
        if (zahl > hoechsteZahl) {
            hoechsteZahl = zahl;
        }
    }
    return hoechsteZahl;
}
console.log(highest(zahlen));  //120

zahlen.sort((a, b) => b - a);
console.log(zahlen);  // 120, 55, 34, 29, 12


function geradeZahlen(zahl) {
    return (zahl % 2 === 0) ? true : false;
}
console.log(zahlen.filter(geradeZahlen));