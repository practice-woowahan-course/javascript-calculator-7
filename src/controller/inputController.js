import CustomView from "../view/inputView";

export default class InputController {
    #separators = [',', ':'];
    #numbers = [];

    constructor(input) {
        this.input = input;
    }

    checkCustomSeparator() {
        if (this.input.startsWith('//')) {
            const endIndex = this.input.indexOf('\\n');
            if (endIndex === -1) return false;
            this.#separators.push(this.input.slice(2, endIndex));
            this.input = this.input.slice(endIndex + 2);
            return true;
        }
        return false;
    }

    splitNumberOperator() {
        this.#numbers = this.#separators.reduce((acc, separator) => {
            return acc.flatMap(item => item.split(separator));
        }, [this.input]);
    }

    validatePlus() {
        if (this.#numbers.some((number) => (number < 0))) {
            throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
        }
    }

    addNumbers(){
        return this.#numbers.map(Number).reduce((acc,cur) => acc + cur , 0);
    }

}