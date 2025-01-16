const Stack = require("../stack");

function decimalToBinary(decimal) {
  let stack = new Stack();
  let number = decimal;
  let binaryResult = "";

  while (number > 0) {
    const rest = number % 2;
    stack.push(rest);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    const value = stack.pop();

    binaryResult = `${binaryResult >= 0 && binaryResult}${value}`;
  }

  return binaryResult;
}

module.exports = decimalToBinary;
