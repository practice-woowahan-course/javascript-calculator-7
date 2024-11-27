import InputController from "./controller/inputController.js";
import CustomView from "./view/inputView.js";

class App {
  async run() {
    const userInput = await CustomView.getStringForAdd();
    const inputController = new InputController(userInput);
    inputController.checkCustomSeparator();
    inputController.splitNumberOperator();
    inputController.validatePlus();
    const totalResult = inputController.addNumbers();
    CustomView.printResult(totalResult);
  }
}

export default App;
