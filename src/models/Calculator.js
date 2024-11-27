class Calculator {
  #delimiter;
  #validate;

  constructor() {
    this.#delimiter = [];
    this.#validate = {
      isCustomDelimiter: (input) => {
        if (input.startsWith('//') && input.includes('\\n')) {
          return true;
        }
        return false;
      },
    };
  }

  calculate(input) {
    const inputContent = this.processDelimiter(input);
    const splitedArray = this.splitInputString(inputContent);

    return splitedArray;
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
    const delimiters = [',', ':'];
    if (this.#validate.isCustomDelimiter(input)) {
      delimiters.push(this.extractCustomDelimiter(input));
    }
    this.#delimiter = new RegExp(`[${delimiters.join('')}]`, 'g');
  }

  extractCustomDelimiter(input) {
    const startDefinition = input.indexOf('//');
    const endDefinition = input.indexOf('\\n');
    const customDelimiter = input.substring(startDefinition + 2, endDefinition);

    return customDelimiter;
  }

  eraseDefinitionString(input) {
    const erasedResult = input.substring(input.indexOf('\\n') + 2);
    return erasedResult;
  }
}

export default Calculator;
