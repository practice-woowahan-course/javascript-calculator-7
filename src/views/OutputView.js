import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';

class OutputView {
  static additionResult(result) {
    Console.print(MESSAGE.OUTPUT.RESULT(result));
  }
}

export default OutputView;
