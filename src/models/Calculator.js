class Calculator {
  #delimiter;

  constructor() {
    this.#delimiter = [];
  }

  splitInputString(input) {
    this.createRegExpDelimiter();
    const splitedString = input.split(this.#delimiter);
    return splitedString;
  }

  createRegExpDelimiter(input) {
    const delimiters = [',', ':'];
    this.#delimiter = new RegExp(`[${delimiters.join('')}]`, 'g');
  }
}

export default Calculator;
