import Calculator from '../src/models/Calculator.js';
import Parser from '../src/utils/Parser.js';

describe('Calculator 클래스 테스트', () => {
  const calculator = new Calculator();

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('기본 구분자로 문자열을 잘 나누는지 확인(구분자가 쉼표)', () => {
    const splitSpy = jest.spyOn(calculator, 'splitInputString');
    calculator.calculate('1,2,3');

    expect(splitSpy).toHaveBeenCalled();
    expect(splitSpy.mock.results[0].value).toEqual(['1', '2', '3']);
  });

  test('기본 구분자로 문자열을 잘 나누는지 확인(구분자가 콜론)', () => {
    const splitSpy = jest.spyOn(calculator, 'splitInputString');
    calculator.calculate('1:2:3');

    expect(splitSpy).toHaveBeenCalled();
    expect(splitSpy.mock.results[0].value).toEqual(['1', '2', '3']);
  });

  test('기본 구분자로 문자열을 잘 나누는지 확인(구분자가 쉼표, 콜론 섞였을 때)', () => {
    const splitSpy = jest.spyOn(calculator, 'splitInputString');
    calculator.calculate('1,2:3');

    expect(splitSpy).toHaveBeenCalled();
    expect(splitSpy.mock.results[0].value).toEqual(['1', '2', '3']);
  });

  test('커스텀 구분자로 문자열을 잘 나누는지 확인(코드작성이므로\\로 작성)', () => {
    const splitSpy = jest.spyOn(calculator, 'splitInputString');
    calculator.calculate('//!\\n1!2!3');

    expect(splitSpy).toHaveBeenCalled();
    expect(splitSpy.mock.results[0].value).toEqual(['1', '2', '3']);
  });

  test('커스텀 구분자와 기본 구분자을 섞어도 문자열을 잘 나누는지 확인', () => {
    const splitSpy = jest.spyOn(calculator, 'splitInputString');
    calculator.calculate('//!\\n1!2,3:4');

    expect(splitSpy).toHaveBeenCalled();
    expect(splitSpy.mock.results[0].value).toEqual(['1', '2', '3', '4']);
  });

  test('구분자로 나누어진 문자열 배열을 숫자열 배열로 잘 바꾸는지 확인', () => {
    const parsedNumberSpy = jest.spyOn(Parser, 'toNumberArray');
    calculator.calculate('//!\\n1!2,3:4');

    expect(parsedNumberSpy).toHaveBeenCalled();
    expect(parsedNumberSpy.mock.results[0].value).toEqual([1, 2, 3, 4]);
  });

  test('덧셈 테스트', () => {
    const result = calculator.sumArray([1, 2, 3]);
    expect(result).toBe(6);
  });
});
