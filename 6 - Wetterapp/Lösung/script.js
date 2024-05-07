const city = "Düsseldorf" // Anpassen für die eigene Stadt

const temp = document.querySelector(".temperature")
document.querySelector(".city").innerText = city;
const img = document.querySelector("img")
const currentTime = document.querySelector(".time")

async function getWeather() {
    // Abfrage der API (HTTP)
    const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + encodeURI(city) + "&appid=868bc208df0d7d2c94f433afb09be393" + "&units=metric");
    // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
    const data = await result.json()

    console.log(data);

    let tempValue = Math.round(data.main.temp * 10) / 10 // Runden auf eine Nachkommastelle
    tempValue = tempValue.toFixed(1) // Immer eine Nachkommastelle, auch wenn 0
    tempValue = Number(tempValue)
    temp.innerText = tempValue.toLocaleString('DE-de') // Umwandeln in Komma als Dezimal-Trennzeichen

    img.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png"

    const timeElapsed = Date.now(); // Anzahl der Millisekunden, die seit dem 01.01.1970 00:00:00 UTC vergangen sind
    
    //const today = new Date(timeElapsed);
    const today = new Date(data.dt * 1000)
    currentTime.innerText = today.toString();
}

setInterval(getWeather, 10000);
