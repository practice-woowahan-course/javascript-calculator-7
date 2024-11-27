import Calculator from '../src/models/Calculator.js';

describe('Calculator 클래스 테스트', () => {
  const calculator = new Calculator();

  test('기본 구분자로 문자열을 잘 나누는지 확인(구분자가 쉼표)', async () => {
    const result = calculator.splitInputString('1,2,3');
    expect(result).toEqual(['1', '2', '3']);
  });

  test('기본 구분자로 문자열을 잘 나누는지 확인(구분자가 콜론)', async () => {
    const result = calculator.splitInputString('1:2:3');
    expect(result).toEqual(['1', '2', '3']);
  });

  test('기본 구분자로 문자열을 잘 나누는지 확인(구분자가 쉼표, 콜론 섞였을 때)', async () => {
    const result = calculator.splitInputString('1,2:3');
    expect(result).toEqual(['1', '2', '3']);
  });

  /*
  test('합계 테스트', async () => {
    const result = calculator.splitInputString('1,2,3');
    expect(result).toBe(2000);
  });
  */
});
