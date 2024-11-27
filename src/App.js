import CustomView from "./view/inputView.js";

class App {
  async run() {
    const userInput = await CustomView.getStringForAdd();
    CustomView.printResult(userInput);
  }
}

export default App;
