import InputView from '../views/InputView.js';

class MainController {
  async start() {
    const inputStringNumber = await InputView.inputStringNumber();
  }
}

export default MainController;
