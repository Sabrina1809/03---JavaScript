const city = "Hurghada" // Anpassen für die eigene Stadt
document.querySelector(".city").innerText = city;



function getData(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=cfc91b5b2c4a443baf375330240905&q=${city}&aqi=no`
)   
    .then((res) => res.json())
    .then((data) => replaceData(data));
}



function replaceData(data) {
    console.log(data);

    const temperature = data.current.temp_c;
    document.querySelector(".temperature").innerText = temperature;

    const img = `https:${data.current.condition.icon}`;
    document.querySelector(".img").textContent = img;

    const update = data.current.last_updated;
    document.querySelector(".time").innerText = update;

    console.log("10 Sekunden vorbei");

    

}
getData(city)
