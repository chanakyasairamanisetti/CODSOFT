let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
  }
  updateDisplay();
}

function appendOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
  }
}

function backspace() {
  currentNumber = currentNumber.slice(0, -1);
  updateDisplay();
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateDisplay();
}

function calculate() {
  if (currentNumber !== "" && operator !== "") {
    let result = 0;
    const prevNum = parseFloat(previousNumber);
    const currNum = parseFloat(currentNumber);
    switch (operator) {
      case "+":
        result = prevNum + currNum;
        break;
      case "-":
        result = prevNum - currNum;
        break;
      case "*":
        result = prevNum * currNum;
        break;
      case "/":
        if (currNum !== 0) {
          result = prevNum / currNum;
        } else {
          alert("Error: Division by zero!");
        }
        break;
      case "%":
        result = prevNum % currNum;
        break;
      default:
        break;
    }
    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
  }
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.querySelector('.display');
  displayElement.value = currentNumber;
}
