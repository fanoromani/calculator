class Calculator {
  constructor(previousOutput, currentOutput) {
    this.previousOutput = previousOutput;
    this.currentOutput = currentOutput;
    this.clear();
  }
  clear() {
    this.currentOutput.innerText = "";
    this.previousOutput.innerText = "";
    this.operation = undefined;
  }
  delete() {}
  appendNumber(number) {
    if (number === "." && this.currentOutput.innerText.includes(".")) return;
    this.currentOutput.innerText += number;
  }
  chooseOperation(operation) {
    this.previousOutput.innerText = this.currentOutput.innerText + operation;
    this.currentOutput.innerText = "";
  }
  compute(operation) {
    switch (operation) {
      case "+":
        parseFloat(this.previousOutput.innerText) +
          parseFloat(this.currentOutput.innerText);

        break;

      default:
        break;
    }
  }
  updateDisplay() {}
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
});
