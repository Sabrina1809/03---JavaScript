let time = document.getElementById("time");

let now = new Date();
// onsole.log(now);

let jahr = now.getFullYear();
// console.log(jahr);
let mon = now.getMonth();
// console.log(mon);
let tag = now.getDate();
// console.log(tag);
let stunde = now.getHours();
// console.log(stunde);
let minute = now.getMinutes();
// console.log(minute);
let sek = now.getSeconds();
// console.log(sek);

switch (mon) {
    case 0:
        mon = "Jan";
        // console.log(mon);
        break;
    case 1:
        mon = "Feb";
        // console.log(mon);
        break;
    case 2:
        mon = "Mrz";
        // console.log(mon);
        break;
    case 3:
        mon = "Apr";
        // console.log(mon);
        break;
    case 4:
        mon = "Mai";
        // console.log(mon);
        break;
    case 5:
        mon = "Jun";
        // console.log(mon);
        break;
    case 6:
        mon = "Jul";
        // console.log(mon);
        break;
    case 7:
        mon = "Aug";
        // console.log(mon);
        break;
    case 8:
        mon = "Sep";
        // console.log(mon);
        break;
    case 9:
        mon = "Okt";
        // console.log(mon);
        break;
    case 10:
        mon = "Nov";
        // console.log(mon);
        break;
    case 11:
        mon = "Dez";
        // console.log(mon);
        break;
}

let zweistelligTag = String(tag).padStart(2, '0'); 
// console.log(zweistelligTag);


function umwandeln() {
    let tagXX = String(tag).padStart(2, '0');
    let stundeXX = String(stunde).padStart(2, '0');
    let minuteXX = String(minute).padStart(2, '0');
    let sekundeXX = String(sek).padStart(2, '0');
    // console.log(tagXX);
    // console.log(stundeXX);
    // console.log(minuteXX);
    // console.log(sekundeXX);

    let ueberschrift = 
`${jahr}-${mon}-${tagXX}
${stundeXX}:${minuteXX}:${sekundeXX}`;

    time.innerText = ueberschrift; 
    console.log(ueberschrift);
}
umwandeln();
 
let bl1Api = 'https://api.openligadb.de/getmatchdata/bl1/2023/33';
let bl2Api = 'https://api.openligadb.de/getmatchdata/bl2/2023/32';
let bl3Api = 'https://api.openligadb.de/getmatchdata/bl3/2023/37';


//-----------------------------------
fetch(bl1Api)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })

  .then(data => {
    // console.log(data);

    bl1 = data;
    console.log(bl1);

    let team1;
    let team2;
  

    function zukunft() { 


    let ergebnisTeam1;
    let ergebnisTeam2;


    for (let i = 0; i < bl1.length; i++) {
        team1 = bl1[i].team1.teamName;
        team2 = bl1[i].team2.teamName;
        console.log(`${team1} vs ${team2}`);
        

        if (bl1[i].goals.length !== 0) {
            //-------------ERGEBNIS-TEAM FUNKTIONIERT NICHT
            ergebnisTeam1 = bl1[i].goals[0];
            console.log(ergebnisTeam1);  
            spiel.textContent(ergebnisTeam1);
            console.log(ergebnisTeam1); 
        } else {
            console.log('? : ?');
            //-------------ERGEBNIS-TEAM FUNKTIONIERT NICHT
            ergebnisTeam1 = bl1[i].goals[0];
            console.log(ergebnisTeam1); 
        };
        i++;

    }


    // if (i < bl1.length) {

    //     team1 = bl1[i].team1.teamName;
    //     team2 = bl1[i].team2.teamName;
    //     console.log(`${team1} vs ${team2}`);
        
    //     if (bl1[i].goals.length !== 0) {
    //         console.log(bl1[i].goals[0].scoreTeam1);   
    //     } else {
    //         console.log('? : ?');
    //         console.log(bl1[i].goals[0].scoreTeam1); 
    //     }


    //     i++;
        
    // } else {
    //     console.log('Hier ist etwas schief gelaufen!');
    // }
    };
    zukunft();
  })

  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });





  fetch(bl2Api)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })

  .then(data => {
    // console.log(data);

    bl2 = data;
    console.log(bl2);

    // let team1;
    // let team2;
    // let teamzeile = `${team1} vs ${team2}`;
    // let ergebnisTeam1;
    // let ergebnisTeam2;
    // let ergebniszeile = `${ergebnisTeam1} : ${ergebnisTeam2}`;

    // function zukunft() { 
    //     let i = 0;
    // if (i < bl1.length) {
    //     team1 = bl1[i].team1.teamName;
    //     team2 = bl1[i].team2.teamName;
    //     ergebnisTeam1 = 
    //     console.log(teamzeile);
    //     i++;
    //     if (bl1[i].goals.length === 0) {
    //         console.log('? : ?');
    //     } else {
    //         console.log(ergebniszeile);
    //     }
        
    // } else if (i < bl1.length && bl1[i].goals.length !== 0) {
    //     team1 = bl1[i].team1.teamName;
    //     team2 = bl1[i].team2.teamName;
    //     console.log(teamzeile);
    //     console.log(ergebniszeile);
    //     i++;
//     } else {
//         console.log('Hier ist etwas schief gelaufen!');
//     }
//     };
//     zukunft();
//   })

//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });



//-----------------------------------
//   fetch(bl2api)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
    
  
//     for (let i = 0; i < data.length; i++) {
//         let team1 = data[i].team1.teamName;
//         let team2 = data[i].team2.teamName;
//         let teamzeile = `${team1} vs ${team2}`;
//         console.log(teamzeile);


//         if (data[i].goals.length === 0) {
//             console.log('? : ?');
//         } else {
//             let ergebnisTeam1 = data[i].goals[0].scoreTeam1;
//             let ergebnisTeam2 = data[i].goals[0].scoreTeam2;
//             let ergebnisZeile = `${ergebnisTeam1} : ${ergebnisTeam2}`;
//             console.log(ergebnisZeile);
//         }
//     }
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });


// //-----------------------------------
// fetch(bl3api)
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// })
// .then(data => {
//   console.log(data);
  

//   for (let i = 0; i < data.length; i++) {
//       let team1 = data[i].team1.teamName;
//       let team2 = data[i].team2.teamName;
//       let teamzeile = `${team1} vs ${team2}`;
//       console.log(teamzeile);


//       if (data[i].goals.length === 0) {
//           console.log('? : ?');
//       } else {
//           let ergebnisTeam1 = data[i].goals[0].scoreTeam1;
//           let ergebnisTeam2 = data[i].goals[0].scoreTeam2;
//           let ergebnisZeile = `${ergebnisTeam1} : ${ergebnisTeam2}`;
//           console.log(ergebnisZeile);
//       }
//   }
// })
// .catch(error => {
//   console.error('There was a problem with the fetch operation:', error);
// });

  })
