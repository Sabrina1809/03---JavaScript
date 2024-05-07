const getText = () => {
    const text = prompt("Gebe Text ein!");
    return new Promise((resolve,reject)=> {
        if(text == "") {
            reject("Nichts eingegeben! 1. Promise nicht erfüllt!");
        }
        resolve(text);
    })

}

const setText = (text) => {
    const concatText = `Text: ${text}`;
    return new Promise((resolve,reject) => {
        resolve(concatText);

    })
    
}

const logText = (text) => {
    console.log(text);
}

const logTextAsync = async() => {
    const textGot = await getText();
    const textConcat = await setText(textGot);
    logText(textConcat);
}

logTextAsync();

// getText()
// .then((text) => {
//     return setText(text);
// })
// .catch((error) => {
//     console.log(`Error: ${error}`)
// })
// .then((concatText) => {
//     logText(concatText);
// })
// .catch((error) => {
//     console.log(`Error: ${error}`)
// })

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
const getData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    for(const person of data) {
        console.log(`Name: ${person.name}`);
    }
}

getData();

//getData();
