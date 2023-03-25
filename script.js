firstNum = 0;
secondNum = 0;
operator = "+";

function operate(operator, firstNum, secondNum) {
    if (operator === "+") return add(firstNum, secondNum);
    if (operator === "-") return subtract(firstNum, secondNum);
    if (operator === "*") return multiply(firstNum, secondNum);
    if (operator === "/") return divide(firstNum, secondNum);
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
