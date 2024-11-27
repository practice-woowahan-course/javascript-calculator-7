import { Console } from '@woowacourse/mission-utils';
import Calculator from '../models/Calculator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class MainController {
  #calculator;

  constructor() {
    this.#calculator = new Calculator();
  }
  async start() {
    const inputStringNumber = await InputView.inputStringNumber();
    const result = this.#calculator.calculate(inputStringNumber);
    OutputView.additionResult(result);
  }
}

export default MainController;
