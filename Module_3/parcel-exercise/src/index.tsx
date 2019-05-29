import "./styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { HelloWorldComponent } from './hello';

const logoImg = require('./content/logo_1.png');

var logoElement = document.createElement("img");
logoElement.src = logoImg;
document.getElementById("logoContainer").appendChild(logoElement);

let name: string = "Juan";
let greetMessage: string = `Hello World From Parcel, ${name}`;
console.log(greetMessage);

ReactDOM.render(
    <HelloWorldComponent greet={'Hello World From React!!!!'} />,
    document.getElementById('root')
);