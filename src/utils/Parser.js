import { InputValidator } from './Validator.js';

const Parser = {
  toNumberArray: (inputArray) => {
    InputValidator.isNumberElement(inputArray);
    const parsedNumberArray = inputArray.map(Number);

    return parsedNumberArray;
  },
};

export default Parser;
