import MESSAGE from '../constants/Message.js';

export const InputValidator = {
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
  isPositiveElement: (inputArray) => {
    const isPositive = inputArray.every((input) => input > 0);
    if (!isPositive) {
      throw new Error(MESSAGE.ERROR.NOT_POSITIVE_NUMBER);
    }
  },
  isDecimalPoint: (input) => {
    if (input === '.') {
      throw new Error(MESSAGE.ERROR.DECIMALPOINT);
    }
  },
};
