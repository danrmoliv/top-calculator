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

function variablesExpression(expression){
    if (expression.includes('+')){
        
        const operator = '+';
        const value1 = parseFloat(expression.split('+')[0]);
        const value2 = parseFloat(expression.split('+')[1]);

        return [value1, value2, operator];

    } else if (expression.includes('-')) {

        const operator = '-';
        const value1 = parseFloat(expression.split('-')[0]);
        const value2 = parseFloat(expression.split('-')[1]);

        return [value1, value2, operator];

    } else if (expression.includes('*')) {

        const operator = '*';
        const value1 = parseFloat(expression.split('*')[0]);
        const value2 = parseFloat(expression.split('*')[1]);

        return [value1, value2, operator];

    } else if (expression.includes('/')) {

        const operator = '/';
        const value1 = parseFloat(expression.split('/')[0]);
        const value2 = parseFloat(expression.split('/')[1]);

        return [value1, value2, operator];

    }

};

function operate(expression){
    expressionVariables = variablesExpression(expression);

    const value1 = expressionVariables[0];
    const value2 = expressionVariables[1];
    const operator = expressionVariables[2];

    if (operator === '+'){
        
        return add(value1, value2);

    } else if (operator === '-') {

        return subtract(value1, value2);

    } else if (operator === '*') {

        return multiply(value1, value2);

    } else if (operator === '/') {

        return divide(value1, value2);

    };
};

let expression1 = '5+2';
let expression2 = '5-2';
let expression3 = '5*2';
let expression4 = '5/2';
let expression5 = '5/0';

console.log(operate(expression1))
console.log(operate(expression2))
console.log(operate(expression3))
console.log(operate(expression4))
console.log(operate(expression5))

