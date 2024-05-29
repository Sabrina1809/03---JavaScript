let city = "Offenburg" // Anpassen für die eigene Stadt
let encodeCity = encodeURI(city);

let temperatur;
let icon;
let time;

function getData(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=cfc91b5b2c4a443baf375330240905&q=${city}&aqi=no`
)   
    .then((res) => res.json())
    .then((data) => replaceData(data))

    function replaceData(data) {
        console.log(data);

        document.querySelector(".city").innerText = city;

        temperatur = data.current.temp_c;
        document.querySelector(".temperature").innerText = temperatur;

        iconLink = data.current.condition.icon;
        icon = `https:${iconLink}`;
        document.querySelector(".img").src = icon;

        time = data.current.last_updated;
        document.querySelector(".time").innerText = time;
    }   
}


getData(city);
function aufrufGetData() {
    getData(city);
}

setInterval(aufrufGetData, 10000);
