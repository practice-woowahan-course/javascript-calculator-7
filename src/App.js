import InputController from "./controller/inputController.js";
import CustomView from "./view/inputView.js";

class App {
  async run() {
    const userInput = await CustomView.getStringForAdd();
    const inputController = new InputController(userInput);
    const totalResult = inputController.playJavascriptCalculator();
    CustomView.printResult(totalResult);
  }
}

export default App;
