const vielfachesVon = Number(prompt("Gebe die Zahl deren Vielfache du wissen möchtest"));

const endGrenze = Number(prompt("Bis wohin möchtest du die jeweiligen Vielfache wissen?"));
let nums = 0;
let zeilenNums = [];

for(let i = 0; i < endGrenze; i++) {
    if(i % vielfachesVon == 0) {
        zeilenNums.push(i);
        nums+= 1;
    } else {
        continue;
    }
    if(nums == 10) {
        console.log(...rowNums);
        rowNums = [];
        nums= 0;
    }
}