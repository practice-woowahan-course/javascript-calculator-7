import Calculator from '../src/models/Calculator.js';

describe('Calculator 클래스 테스트', () => {
  const calculator = new Calculator();

  test('기본 구분자로 문자열을 잘 나누는지 확인(구분자가 쉼표)', () => {
    const result = calculator.calculate('1,2,3');
    expect(result).toEqual([1, 2, 3]);
  });

  test('기본 구분자로 문자열을 잘 나누는지 확인(구분자가 콜론)', () => {
    const result = calculator.calculate('1:2:3');
    expect(result).toEqual([1, 2, 3]);
  });

  test('기본 구분자로 문자열을 잘 나누는지 확인(구분자가 쉼표, 콜론 섞였을 때)', () => {
    const result = calculator.calculate('1,2:3');
    expect(result).toEqual([1, 2, 3]);
  });

  test('커스텀 구분자로 문자열을 잘 나누는지 확인(코드작성이므로\\로 작성)', () => {
    const result = calculator.calculate('//!\\n1!2!3');
    expect(result).toEqual([1, 2, 3]);
  });

  test('커스텀 구분자와 기본 구분자을 섞어도 문자열을 잘 나누는지 확인', () => {
    const result = calculator.calculate('//!\\n1,2!3:4');
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
