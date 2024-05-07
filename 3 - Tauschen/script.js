let links = document.getElementById("links");
let rechts = document.getElementById("rechts");

// let rot = links.innerHTML;
// rechts.textContent = "rot"
// console.log(rot);

// let gruen = rechts.innerHTML;
// links.textContent = "grün"
// console.log(gruen);

function toggle() {
    if (links.style.backgroundColor == "red" && rechts.style.backgroundColor == "green") {
        links.style.backgroundColor = "green";
        links.textContent = "green";
        rechts.style.backgroundColor = "red";
        rechts.textContent = "rot";
    } else {
        links.style.backgroundColor = "red";
        links.textContent = "rot";
        rechts.style.backgroundColor = "green";
        rechts.textContent = "grün";
    }
}

setInterval(toggle, 2000);