firstNum = 0;
secondNum = 0;
operator = "";
displayValue = "";


const display = document.querySelector('.calculator-display');
const clearBtn = document.querySelector(".all-clear");
const operationBtns = document.querySelectorAll(".operation");
const numberBtns = document.querySelectorAll(".number");


clearBtn.onclick = clear;

numberBtns.forEach(numBtn => numBtn.addEventListener('click', (e) => {
    displayValue += e.target.textContent;
    display.textContent = displayValue;
    if (operator === "") firstNum = parseFloat(displayValue);
    else {
        secondNum = parseFloat(displayValue);
        firstNum = operate(operator, firstNum, secondNum);
    }

}));

operationBtns.forEach(operateBtn => operateBtn.addEventListener('click', (e) => {
    if (e.target.classList[1] === "divide") operator = "/";
    if (e.target.classList[1] === "multiply") operator = "*";
    if (e.target.classList[1] === "subtract") operator = "-";
    if (e.target.classList[1] === "add") operator = "+";
    if (e.target.classList[1] === "equals") if (firstNum === 0) return;
    displayValue = "";
    display.textContent = firstNum;
}));

function operate(op, a, b) {
    if (op === "+") return add(a, b);
    if (op === "-") return subtract(a, b);
    if (op === "*") return multiply(a, b);
    if (op === "/") return divide(a, b);
    else return "ERROR: Invalid operation!";
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "ERROR: Can't divide by zero!";
    return a / b;
}

function clear() {
    displayValue = "";
    display.textContent = "0";
    firstNum = 0;
    secondNum = 0;
    operator = "";
    finalValue = "";
}
