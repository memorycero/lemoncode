
function clone(source) {
    let clone = {};
    for (const prop in source) {
        if (source.hasOwnProperty(prop)) {
            clone[prop] = source[prop];
        }
    }
    return clone;
}

function merge(source, target) {
    let cloneSource = clone(source);
    let cloneTarget = clone(target);
    for (const prop in cloneSource) {
        if (cloneSource.hasOwnProperty(prop)) {
            cloneTarget[prop] = cloneSource[prop];
        }
    }
    console.log(cloneTarget);
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

merge(a, b);