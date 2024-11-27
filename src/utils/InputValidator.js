import MESSAGE from '../constants/Message.js';

const InputValidator = {
  isEmpty: (input) => {
    if (input === null || input.trim().length === 0 || !input) {
      throw new Error(MESSAGE.ERROR.IS_EMPTY);
    }
  },
};

export default InputValidator;
