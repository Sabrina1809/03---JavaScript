const red = document.querySelector(".red");
const green = document.querySelector(".green");

// red.style.backgroundColor = "green"; 
console.log(red)
// green.style.backgroundColor = "red"; 

//const text = red.innerText;
//red.innerText = green.innerText;
//green.innerText = text;

setInterval(farbWechsel, 2000);

function farbWechsel() {
    red.classList.toggle("green");
    red.classList.toggle("red");

    // const text = red.innerText;
    //red.innerText = green.innerText;
    //green.innerText = text;   
    [red.innerText, green.innerText] = [green.innerText, red.innerText]
    
    green.classList.toggle("green");
    green.classList.toggle("red");
}