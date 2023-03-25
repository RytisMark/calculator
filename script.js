firstNum = 0;
secondNum = 0;
operator = "";
displayValue = "";

const display = document.querySelector('.calculator-display');
const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".all-clear");

clearBtn.onclick = clear;

numberBtns.forEach(numBtn => numBtn.addEventListener('click', (e) => {
    displayValue += e.target.textContent;
    display.textContent = displayValue;

    if (operator === "") {
        firstNum = parseFloat(displayValue);
    } else {
        secondNum = parseFloat(displayValue);
    }
}));

operationBtns.forEach(operateBtn => operateBtn.addEventListener('click', (e) => {
    if (e.target.classList[1] === "divide") operator = "/";
    if (e.target.classList[1] === "multiply") operator = "*";
    if (e.target.classList[1] === "subtract") operator = "-";
    if (e.target.classList[1] === "add") operator = "+";
    if (e.target.classList[1] === "equals") {
        if (firstNum === 0) return;
        firstNum = operate(operator, firstNum, secondNum);
        display.textContent = firstNum;
    }
    displayValue = "";
}));

function operate(operator, a, b) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "*") return multiply(a, b);
    if (operator === "/") return divide(a, b);
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
    return a / b;
}

function clear() {
    displayValue = "";
    display.textContent = "0";
    firstNum = 0;
    secondNum = 0;
    operator = "";
}
