function add(a, b) {
    return a + b
};

function subtract(a,b){
    return a - b
};

function multiply(a,b){
    return a * b
};

function divide(a,b){
    if (b === 0) {
        return 'Error'
    } else {
        return a / b
    }
};

console.log(add(1,6))
console.log(subtract(1,6))
console.log(multiply(2,6))
console.log(divide(5,2))

console.log(divide(5,0))