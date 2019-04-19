

const head = ([firstElement,]) => firstElement;

const tail = ([firstElement, ...array]) => array;

const init = (array) => array.slice(0, array.length - 1);

const last = (array) => array.pop(array.length - 1);

console.log(head(["red", "green", "yellow", "blue"]));
console.log(tail(["red", "green", "yellow", "blue"]));
console.log(init(["red", "green", "yellow", "blue"]));
console.log(last(["red", "green", "yellow", "blue"]));