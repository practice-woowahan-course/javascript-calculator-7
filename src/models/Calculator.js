import DEFINITION from '../constants/Definition.js';
import Parser from '../utils/Parser.js';

class Calculator {
  #delimiter;
  #validate;

  constructor() {
    this.#delimiter = [];
    this.#validate = {
      isCustomDelimiter: (input) => {
        if (
          input.startsWith(DEFINITION.DELIMITER.START) &&
          input.includes(DEFINITION.DELIMITER.END)
        ) {
          return true;
        }
        return false;
      },
    };
  }

  calculate(input) {
    const inputContent = this.processDelimiter(input);
    const splitedArray = this.splitInputString(inputContent);
    const parsedNumberArray = Parser.toNumberArray(splitedArray);
    const additionResult = this.sumArray(parsedNumberArray);

    return additionResult;
  }

  splitInputString(input) {
    const splitedString = input.split(this.#delimiter);
    return splitedString;
  }

  processDelimiter(input) {
    this.createRegExpDelimiter(input);
    if (this.#validate.isCustomDelimiter(input)) {
      return this.eraseDefinitionString(input);
    }

    return input;
  }

  createRegExpDelimiter(input) {
    const delimiters = [
      DEFINITION.DELIMITER.DEFAULT_1,
      DEFINITION.DELIMITER.DEFAULT_2,
    ];
    if (this.#validate.isCustomDelimiter(input)) {
      delimiters.push(this.extractCustomDelimiter(input));
    }
    this.#delimiter = new RegExp(`[${delimiters.join('')}]`, 'g');
  }

  extractCustomDelimiter(input) {
    const startIndex = input.indexOf(DEFINITION.DELIMITER.START);
    const endIndex = input.indexOf(DEFINITION.DELIMITER.END);
    const customDelimiter = input.substring(startIndex + 2, endIndex);

    return customDelimiter;
  }

  eraseDefinitionString(input) {
    const erasedResult = input.substring(
      input.indexOf(DEFINITION.DELIMITER.END) + 2,
    );
    return erasedResult;
  }

  sumArray(inputArray) {
    return inputArray.reduce((acc, cur) => acc + cur, 0);
  }
}

export default Calculator;
