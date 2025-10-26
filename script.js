////////////// Operation Functions ///////////////

function add(a, b) {
    return parseFloat(a) + parseFloat(b)
};

function subtract(a,b){
    return parseFloat(a) - parseFloat(b)
};

function multiply(a,b){
    return parseFloat(a) * parseFloat(b)
};

function divide(a,b){
    if (parseFloat(b) === 0) {
        return 'Error'
    } else {
        return parseFloat(a) / parseFloat(b)
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

    const value1 = parseFloat(expressionVariables[0]);
    const value2 = parseFloat(expressionVariables[1]);
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

function operateList(expression){
    const value1 = expression[0];
    const value2 = expression[2];
    const operator = expression[1];

    console.log(value1, value2, operator)

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

// let expression1 = '5+2';
// let expression2 = '5-2';
// let expression3 = '5*2';
// let expression4 = '5/2';
// let expression5 = '5/0';

// console.log(operate(expression1))
// console.log(operate(expression2))
// console.log(operate(expression3))
// console.log(operate(expression4))
// console.log(operate(expression5))




//////////// EventListener ////////////////

buttons = document.querySelectorAll('button')
displayValue = document.querySelector('.display-values')

let expressionInputs = []
let newInput = ''
let result = 0

displayValue.textContent = newInput

function insertExpressionNumbers(digito){
    newInput = newInput+digito
    return newInput
};

function insertExpressionOperator(operator){
    expressionInputs.push(newInput)
    expressionInputs.push(operator)
    newInput = ''
};

function calculateEqual(){
    expressionInputs.push(newInput)
    console.log(expressionInputs)

    result = operateList(expressionInputs)

    expressionInputs = []
    newInput = result

    return result
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log(button.textContent)
        // console.log(button.className)
        // console.log(button.className.includes('number'))


        if (button.className.includes('number')) {
            displayValue.textContent = insertExpressionNumbers(button.textContent);
            console.log(newInput);
        }

        if (button.className.includes('operator')) {
            if (expressionInputs.length === 3){
                displayValue.textContent = calculateEqual()
                console.log(expressionInputs)
                console.log(result)
            }

            insertExpressionOperator(button.textContent)
            console.log(expressionInputs)
        }

        if (button.className.includes('equal')) {
            displayValue.textContent = calculateEqual()
            console.log(expressionInputs)
            console.log(result)
        }
    })
})