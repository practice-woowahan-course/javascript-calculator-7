import MainController from './controllers/MainController.js';
class App {
  async run() {
    const main = new MainController();
    main.start();
  }
}

export default App;
