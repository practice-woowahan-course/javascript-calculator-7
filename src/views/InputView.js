import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';

class InputView {
  static async inputStringNumber() {
    return await Console.readLineAsync(MESSAGE.INFO.INPUT_INFO);
  }
}

export default InputView;
