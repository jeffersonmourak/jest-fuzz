import { float as floatFuzzer } from './float';

describe('Float Fuzzer', () => {
  it('Should return a number', () => {
    const optionLessFloat = floatFuzzer()();
    const optionFullFloat = floatFuzzer({ min: 0, max: 2 })();

    expect(parseFloat(optionLessFloat.toString()) === optionLessFloat).toBe(
      true
    );
    expect(parseFloat(optionFullFloat.toString()) === optionFullFloat).toBe(
      true
    );
  });
});
