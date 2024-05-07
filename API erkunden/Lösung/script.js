const parentApp = document.querySelector("#app");
const imgs = document.querySelectorAll("img")


//Use Typescript to mark param as List
//give attributesToChange as list [attribute,value]
function createSomeElement(htmlElement,...attributesToChange) {
    console.log(arguments.length);
    if(arguments.length < 1) {
        throw new Error("No html Element provided");    
    }
    if(arguments[0] == 1 && attributesToChange === undefined) {
        const elementCreated = document.createElement(htmlElement);
        console.log("created!",elementCreated);
        return elementCreated;
    }
    else if(attributesToChange != undefined) {
        const elementCreated = document.createElement(htmlElement);
        console.log(attributesToChange);
        for(const arg of attributesToChange) {
            //switch case
                if(arg[0] == "innerText") {
                    elementCreated.innerText = arg[1];

                }
                else if(arg[0] == "src") {
                    elementCreated.src = arg[1];
                }
                else if(arg[0] == "style") {
                    elementCreated.style = arg[1]; 
                }
                else if(arg[0] == "alt") {
                    elementCreated.alt = arg[1];
                }
                else if(arg[0] == "class") {
                    elementCreated.classList.add(arg[1]);
                }
                else if (arg[0] == "id") {
                    elementCreated.setAttribute("id",arg[1]);
                }
                else {
                    throw new Error("Some invalid HTML Attribute provided!");
                }
            }

        console.log("created",elementCreated);
        return elementCreated;
    }

}
const appendChilds = (parentElement,...listOfElements) => {
    console.log(parentElement);
    for(const element of listOfElements){
        parentElement.appendChild(element);
    }
}

const createCard = (picUrl="",parent=parentApp,cardClass="card",contentsClass="container",personName="John Doe",email="Idiot") => {
    const card = createSomeElement("div",["class",cardClass]);
    parentApp.appendChild(card);
    const img = createSomeElement("img",["src",picUrl],["class","pic"]);
    const infoContainer = createSomeElement("div",["class",contentsClass]);
    const name = createSomeElement("h4",["innerText",personName]);
    const descriptionPerson = createSomeElement("p",["innerText",email]); 
    appendChilds(infoContainer,name,descriptionPerson);
    appendChilds(card,img,infoContainer);
    appendChilds(parent,card);

};


//get Data
const getData = async (persons) => {
    const fetchingData = await fetch(`https://randomuser.me/api/?results=${persons}`);
    const data = await fetchingData.json();
    const dataArr = data.results;
    for(const element of dataArr) {
        createCard(picUrl=element.picture.medium,parent=parentApp,cardClass="card",contentsClass="container",personName=`${element.name.first}  ${element.name.last}`,email= element.email)
        console.log(element);
    } 
}


getData(15);








