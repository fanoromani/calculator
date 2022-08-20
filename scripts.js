class Calculator {
  constructor(previousOutput, currentOutput) {
    this.previousOutput = previousOutput.innerText;
    this.currentOutput = currentOutput.innerText;
    this.clear();
  }
  clear() {
    this.currentOutput = "";
    this.previousOutput = "";
    this.operation = undefined;
    this.updateDisplay();
  }
  delete() {
    this.currentOutput = this.currentOutput.slice(0, -1);
    this.updateDisplay();
  }
  appendNumber(number) {
    if (number === "." && this.currentOutput.includes(".")) return;
    this.currentOutput += number;
    this.updateDisplay();
  }
  chooseOperation(operation) {
    this.previousOutput = this.currentOutput + operation;
    this.currentOutput = "";
    this.updateDisplay();
  }
  compute() {
    const a = parseFloat(this.previousOutput.slice(0, -1));
    const b = parseFloat(this.currentOutput);
    let result = 0;
    switch (this.previousOutput.slice(-1)) {
      case "+":
        result = a + b;

        break;
      case "-":
        result = a - b;

        break;
      case "*":
        result = a * b;

        break;
      case "÷":
        result = a / b;

        break;

      default:
        break;
    }
    this.currentOutput = result;
    this.previousOutput = "";
    this.updateDisplay();
  }
  updateDisplay() {
    currentOutput.innerText = this.currentOutput;
    previousOutput.innerText = this.previousOutput;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const acButton = document.querySelector("[data-ac]");
const delButton = document.querySelector("[data-del]");
const equalsButton = document.querySelector("[data-equals]");
const previousOutput = document.querySelector("[data-previous-output]");
const currentOutput = document.querySelector("[data-current-output]");

const calculator = new Calculator(previousOutput, currentOutput);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
  });
});

acButton.addEventListener("click", () => {
  calculator.clear();
  this.updateDisplay();
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
  this.updateDisplay();
});

delButton.addEventListener("click", () => {
  calculator.delete();
});
