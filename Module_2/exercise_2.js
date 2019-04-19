

const concat = (a, b) => [...a, ...b];

const multipleConcat = (...arrays) => arrays.flat();

let array1 = ["red", "green"];
let array2 = ["yellow", "black"];
let array3 = ["orange", "pink"];
let array4 = ["brown", "blue"];

console.log(concat(array1, array2));
console.log(multipleConcat(array1, array2, array3, array4));