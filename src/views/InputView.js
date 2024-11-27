import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';
import { InputValidator } from '../utils/Validator.js';

class InputView {
  static async inputStringNumber() {
    const input = await Console.readLineAsync(MESSAGE.INFO.INPUT_INFO);
    InputValidator.isEmpty(input);

    return input;
  }
}

export default InputView;
