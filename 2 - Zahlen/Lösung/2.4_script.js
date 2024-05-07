const arr = [1, 12, 6, 92]

// Ausgabe gerader Zahlen

function geradeZahlen(zahl) {
    return (zahl % 2 === 0) ? true : false;
}

console.log(arr.filter(geradeZahlen));
