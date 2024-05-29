const elemente = document.querySelectorAll(".drum");
console.log(elemente);
elemente.forEach(function(element) {
    element.addEventListener("click", function(event) {
        const buttonInnerHTML = event.target.innerText;
        make_sound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
});

document.addEventListener("keypress", function(event) {
    make_sound(event.key);
    buttonAnimation(event.key);
})

function make_sound(key) {
    let music;
    switch(key) {
        case "s":
            music = new Audio("sounds/crash.mp3");
            music.play();
            break;
        case "a": 
            music = new Audio("sounds/kick-bass.mp3");
            music.play();
            break;
        case "b": 
            music = new Audio("sounds/snare.mp3");
            music.play();
            break;
        case "r": 
            music = new Audio("sounds/tom-1.mp3");
            music.play();
            break;
        case "i": 
            music = new Audio("sounds/tom-2.mp3");
            music.play();
            break;
        case "n": 
            music = new Audio("sounds/tom-3.mp3");
            music.play();
            break;
        case "f": 
            music = new Audio("sounds/tom-4.mp3");
            music.play();
            break;
        default: alert("Das war eine falsche Taste.");
            console.log(key);
    }
}


function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 2000);
}