import MESSAGE from '../constants/Message.js';

const InputValidator = {
  isEmpty: (input) => {
    if (input === null || input.trim().length === 0 || !input) {
      throw new Error(MESSAGE.ERROR.IS_EMPTY);
    }
  },
  isNumberElement: (inputArray) => {
    const isNumber = inputArray.every((input) => !isNaN(Number(input)));
    if (!isNumber) {
      throw new Error(MESSAGE.ERROR.CANT_BE_NUMBER);
    }
  },
};

export default InputValidator;
