import "./styles.scss";

const logoImg = require('./content/logo_1.png');

var logoElement = document.createElement("img");
logoElement.src = logoImg;
document.getElementById("logoContainer").appendChild(logoElement);

let name: string = "Juan";
let greetMessage: string = `Hello World From Parcel, ${name}`;
console.log(greetMessage);