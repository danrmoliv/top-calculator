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
        
        return Math.round(add(value1, value2) * 1000) / 1000;

    } else if (operator === '-') {

        return Math.round(subtract(value1, value2) * 1000) / 1000;

    } else if (operator === '*') {

        return Math.round(multiply(value1, value2) * 1000) / 1000;

    } else if (operator === '/') {

        return Math.round(divide(value1, value2) * 1000) / 1000;

    };
};


//////////// EventListener ////////////////

buttons = document.querySelectorAll('button')
displayValue = document.querySelector('.display-values')
dotButton = document.querySelector('#dot-button')

let expressionInputs = []
let newInput = ''
let result = ''

displayValue.textContent = newInput

function checkDotButton(){
    if (newInput.includes('.')) {
        dotButton.disabled=true;
    } else {
        dotButton.disabled=false;
    }
}

function insertExpressionNumbers(digito){
    if ((result !== '') && (result === newInput)){
        clear()
    }

    if (newInput.length < 9){
        newInput = newInput+digito
    }
    checkDotButton();

    return newInput
};

function insertExpressionOperator(operator){
    if (newInput === ''){
        console.log("newInput = ''")
    } else {
        if (expressionInputs.length === 2) {
            displayValue.textContent = calculateEqual()
        }
        expressionInputs.push(newInput)
        expressionInputs.push(operator)
        newInput = ''
        checkDotButton();
    }
};

function calculateEqual(){
    if (newInput === ''){
        console.log("newInput = ''")
    } else {
        expressionInputs.push(newInput)
        // console.log(expressionInputs)

        result = operateList(expressionInputs)

        expressionInputs = []
        newInput = result

        return result
    }
};

function clear(){
    expressionInputs = [];
    newInput = '';
    result = '';

    displayValue.textContent = newInput;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log(button.textContent)
        // console.log(button.className)
        // console.log(button.className.includes('number'))


        if (button.className.includes('number')) {
            displayValue.textContent = insertExpressionNumbers(button.textContent);
            // console.log(newInput);
        }

        if (button.className.includes('operator')) {

            if (expressionInputs.length >= 3){
                displayValue.textContent = calculateEqual()
                // console.log(expressionInputs)
                // console.log(result)
            }

            insertExpressionOperator(button.textContent)
            // console.log(expressionInputs)

        }

        if (button.className.includes('equal')) {
            displayValue.textContent = calculateEqual()
            // console.log(expressionInputs)
            // console.log(result)
        }

        if (button.id === 'clear') {
            clear();
        }

        if (button.id === 'del') {
            if (newInput === ''){
                clear()
            }
            else {
                newInput = newInput.substring(0, newInput.length-1);
                displayValue.textContent = newInput;
            }
        }        
    })
});


//////////// Keyboard Events ////////////////


bodyElement = document.querySelector('body');
let clickEvent = new Event('click');

const btn1 = document.querySelector('#button-1');
const btn2 = document.querySelector('#button-2');
const btn3 = document.querySelector('#button-3');
const btn4 = document.querySelector('#button-4');
const btn5 = document.querySelector('#button-5');
const btn6 = document.querySelector('#button-6');
const btn7 = document.querySelector('#button-7');
const btn8 = document.querySelector('#button-8');
const btn9 = document.querySelector('#button-9');
const btn0 = document.querySelector('#button-0');
const btnDot = document.querySelector('#dot-button');
const btnEqual = document.querySelector('#button-equal');
const btnAdd = document.querySelector('#button-add');
const btnSubtract = document.querySelector('#button-subtract');
const btnMultiply = document.querySelector('#button-multiply');
const btnDivide = document.querySelector('#button-divide');
const btnClear = document.querySelector('#clear');
const btnDel = document.querySelector('#del');



bodyElement.addEventListener('keydown', (event) => {
    // console.log(`key=${event.key},code=${event.code}`);

    switch (event.key){
        case '1': 
            btn1.dispatchEvent(clickEvent);
            break;
        case '2': 
            btn2.dispatchEvent(clickEvent);
            break;
        case '3': 
            btn3.dispatchEvent(clickEvent);
            break;
        case '4': 
            btn4.dispatchEvent(clickEvent);
            break;
        case '5': 
            btn5.dispatchEvent(clickEvent);
            break;
        case '6': 
            btn6.dispatchEvent(clickEvent);
            break;
        case '7': 
            btn7.dispatchEvent(clickEvent);
            break;
        case '8': 
            btn8.dispatchEvent(clickEvent);
            break;
        case '9': 
            btn9.dispatchEvent(clickEvent);
            break;
        case '0': 
            btn0.dispatchEvent(clickEvent);
            break;
        case '.': 
            btnDot.dispatchEvent(clickEvent);
            break;
        case '+': 
            btnAdd.dispatchEvent(clickEvent);
            break;
        case '-': 
            btnSubtract.dispatchEvent(clickEvent);
            break;
        case '*': 
            btnMultiply.dispatchEvent(clickEvent);
            break;
        case '/': 
            btnDivide.dispatchEvent(clickEvent);
            break;
        case 'Enter': 
            btnEqual.dispatchEvent(clickEvent);
            break;
        case 'Backspace': 
            btnDel.dispatchEvent(clickEvent);
            break;
        case 'Delete': 
            btnClear.dispatchEvent(clickEvent);
            break;
        case 'Escape': 
            btnClear.dispatchEvent(clickEvent);
            break;
    };

});





