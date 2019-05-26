import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloWorldComponent } from './hello';

var logoElement = document.createElement("img");
logoElement.src = './src/content/logo_1.png';
document.getElementById("logoContainer").appendChild(logoElement);

ReactDOM.render(
    <HelloWorldComponent greet={'Hello World From React!!!!'} />,
    document.getElementById('root')
);
