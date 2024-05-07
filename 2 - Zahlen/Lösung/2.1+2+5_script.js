const arr = [1, 12, 6, 92]

// Größte Zahl mit Funktion
function highest(zahlenfolge) {
    let hoechsteZahl = null;
    for (let zahl of zahlenfolge) {
        if (zahl > hoechsteZahl) {
            hoechsteZahl = zahl;
        }
    }
    return hoechsteZahl;
}
console.log(highest(arr));
// console.log(92);

// Zusatzaufgabe: Sortieren - Bubble Sort
for (let n = arr.length; n>1; n--) { // arr.length gibt die Anzahl der Elemente zurück.
    for(let i = 0; i < n-1; i++) {
        if(arr[i] > arr[i+1]) {
            /* let arr_old = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = arr_old;*/
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
        console.log(arr);
    }
    console.log("---");
}
console.log("---");
console.log(arr); 