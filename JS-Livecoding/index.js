//if - data type comparison
// let userChoosenName = prompt(">>\n");
// console.log(userChoosenName === typeof userChoosenName);
// if(userChoosenName ==12) {
//     console.log("Please do not provide a number");
// } else if (userChoosenName === "Saqib") {
//     console.log(userChoosenName);
// } else {
//     console.log("undefined");
// }

//tenary operators - one condition, one output
// userChoosenName == "Test" ? console.log("correct") : console.log("undefined");

//switch

//for - basic
const personNames = ["Saqib", "Name", "Test"];
const weights = [52, 25, 12];
const weight_factor = 2;

//dictionary
const persons = [
  {
    name: "Saqib",
    age: 12,
    profession: "student",
  },
  {
    name: "Test",
    age: 214,
    profession: "sanitor",
  },
  {
    name: "Blub",
    age: 15,
    profession: "student",
  },
];

// persons.forEach(element => {
//     element.age > 12 ? console.log(element.age) : console.log("too young");
// });

//const re-assignments of objects are not possible
//but you can work with loops objects
// for (let index = 0; index < weights.length; index++) {
//   weights[index] = weights[index] * weight_factor;
// }
// weights.forEach(element => {
//copies an element of an object - does modify directly!
// element = element * weight_factor;
// });
// for (const element of weights) {
//does not work - since a copy of an element is created
//     element = element * weight_factor;
// }

// for (const index in weights) {
//    console.log(key);
// }

// let onOff = true;
// let firstNumberOperand = 0;
//  let secondNumberOperand = 0;
// while(onOff) {
//     let firstNumberOperand = prompt(">>");
//     let secondNumberOperand = prompt(">>");
//     if(firstNumberOperand != 0 || secondNumberOperand != 0 ) {
//         break;
//     }
// }
let todoOwner = "Saqib";
//check later
// console.log(`Empty: ${todoOwner.length}`);
// if (todoOwner.length < 0) {
//   console.log("Test");
//   todoOwner = "Someone";
// }
const todos = [
  {
    todo: "putzen",
    time: "11:00",
    done: false,
  },
  {
    todo: "wischen",
    time: "11:00",
    done: true,
  },
  {
    todo: "lernen",
    time: "11:00",
    done: false,
  },
];
const todoHeader = document.querySelector("#todoHeader");
let baseHeaderText = todoHeader.innerText;
baseHeaderText = todoOwner + "s: " + baseHeaderText;
todoHeader.innerText = baseHeaderText;
const listContainer = document.querySelector(".list-container");
const listElements = document.querySelectorAll(".list-item");

// for (let index = 0; index < listElements.length; index++) {
//   let listElementText = listElements[index].innerText;
//   listElementText = todos[index].todo;
//   listElements[index].innerText = listElementText;
// }

document.addEventListener("click", () => {
  todos.forEach((element) => {
    if (!element.done) {
      const todoElement = document.createElement("li");
      todoElement.setAttribute("class", "todo-list");
      todoElement.innerText = element.todo;
      listContainer.append(todoElement);
    }
  });
});

//über meine datenstruktur (object) iterieren
//und dessen basis die listElement erzeugen
//listElement mit Inhalt
//ich möchte nur list-items erstellen
//wo das done-feld true ist

