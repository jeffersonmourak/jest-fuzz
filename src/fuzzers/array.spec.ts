import { string as stringFuzzer } from './string';
import { isArray, isInteger, isString } from 'lodash';
import { array as arrayFuzzer } from './array';

describe('Array Fuzzer', () => {
  it('Should return an array of int', () => {
    const optionLessArray = arrayFuzzer()();

    expect.assertions(optionLessArray.length + 2);

    expect(isArray(optionLessArray)).toBe(true);
    expect(optionLessArray.length).toBeLessThanOrEqual(300);

    optionLessArray.forEach((item) => {
      expect(isInteger(item)).toBe(true);
    });
  });

  it('Should return an array of strings with 20 or less elements', () => {
    const options = {
      type: stringFuzzer(),
      length: 20,
    };
    const optionFullArray = arrayFuzzer(options)();

    expect.assertions(optionFullArray.length + 2);

    expect(isArray(optionFullArray)).toBe(true);
    expect(optionFullArray.length).toBeLessThanOrEqual(20);

    optionFullArray.forEach((item) => {
      expect(isString(item)).toBe(true);
    });
  });

  it('Should throw error when min length less than 1', () => {
    const options = {
      type: stringFuzzer(),
      minLength: 0,
    };

    expect(() => arrayFuzzer(options)()).toThrow(
      "Array Fuzzer: The minimum length can't be less than 1"
    );
  });

  it('Should throw error when min length less than 1', () => {
    const options = {
      type: null as any,
    };

    expect(() => arrayFuzzer(options)()).toThrow(
      "Array Fuzzer: You can't use a object as fuzzer."
    );
  });
});
