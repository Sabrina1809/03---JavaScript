//get input value for corressponding league
let league = "bl1";
const inputLeague  = document.querySelector("#ligaInput");


//onkeypress function for getting input and setting liga to value

const leagueKeypress = (event) => {
    if(event.key == "Enter") {
        const input_val = document.querySelector("#ligaInput").value;
        if (input_val === "bl1" || input_val == "bl2"|| input_val == "bl3"){
            league = input_val;
            document.querySelector(".list").textContent = "";
            fetchBundesligaData();
        } else {
            alert("Value does not equal bl1 or bl2 or bl3");
        }
    }
}


//create html list  
const createTeamList = (team1,team2,score1,score2) =>  {
    const listUl = document.querySelector(".list");
    const match = document.createElement("li");
    const text = team1 + " vs " + team2 + " \nScore " + score1 + ":" + score2;
    match.innerText = text;
    listUl.appendChild(match);
}

//fetch function

const getTeam = (data) => { 
    for(dataPoint of data) {
        console.log(dataPoint)
        const team1 = dataPoint.team1.teamName;
        const team2 = dataPoint.team2.teamName;
        const score1 = dataPoint.goals.at(-1).scoreTeam1;
        const score2 = dataPoint.goals.at(-1).scoreTeam2;
        createTeamList(team1,team2,score1,score2);
    }
}


const fetchBundesligaData = async () =>  {
    console.log(league);
    const res = await fetch("https://api.openligadb.de/getmatchdata/" +league);
    const data = await res.json();
    console.log(data);
    getTeam(data);


}


// initial bundesliga call
fetchBundesligaData();
inputLeague.addEventListener("keypress",leagueKeypress);

//Current; written into header h1
const date = Date()
const dateSplit=date.split(" ");

const dateNow =  dateSplit[3] + "-" + dateSplit[1] + "-" + dateSplit[2] + "\n" + dateSplit[4];
let header = document.querySelector(".time");
header.innerText = dateNow;