import { isString, isBoolean, isArray, isInteger } from 'lodash';
import Fuzz from './index';

describe('jest-fuzz smoke', () => {
  describe('Fuzz.test', () => {
    Fuzz.test('Should test 100 strings', Fuzz.string(), (string) => {
      expect(isString(string)).toBe(true);
    });

    Fuzz.test('Should test 100 integers', Fuzz.int(), (int) => {
      expect(isInteger(int)).toBe(true);
    });

    Fuzz.test('Should test 100 floats', Fuzz.float(), (float) => {
      expect(parseFloat(float) === float).toBe(true);
    });

    Fuzz.test('Should test 100 booleans', Fuzz.bool(), (bool) => {
      expect(isBoolean(bool)).toBe(true);
    });

    Fuzz.test('Should test 100 arrays of integer', Fuzz.array(), (array) => {
      expect.assertions(array.length + 2);

      expect(isArray(array)).toBe(true);
      expect(array.length).toBeLessThanOrEqual(300);

      array.forEach((item) => {
        expect(isInteger(item)).toBe(true);
      });
    });

    const customFuzzer = Fuzz.Fuzzer({
      array: Fuzz.array(),
      string: Fuzz.string(),
    });

    Fuzz.test(
      'Should test 100 custom fuzzers',
      customFuzzer(),
      ({ string, array }) => {
        expect.assertions(array.length + 3);

        expect(isString(string)).toBe(true);

        expect(isArray(array)).toBe(true);
        expect(array.length).toBeLessThanOrEqual(300);

        array.forEach((item) => {
          expect(isInteger(item)).toBe(true);
        });
      }
    );
  });

  describe('Fuzz.it', () => {
    Fuzz.it('Should test 100 strings', Fuzz.string(), (string) => {
      expect(isString(string)).toBe(true);
    });

    Fuzz.it('Should test 100 integers', Fuzz.int(), (int) => {
      expect(isInteger(int)).toBe(true);
    });

    Fuzz.it('Should test 100 floats', Fuzz.float(), (float) => {
      expect(parseFloat(float) === float).toBe(true);
    });

    Fuzz.it('Should test 100 booleans', Fuzz.bool(), (bool) => {
      expect(isBoolean(bool)).toBe(true);
    });

    Fuzz.it('Should test 100 arrays of integer', Fuzz.array(), (array) => {
      expect.assertions(array.length + 2);

      expect(isArray(array)).toBe(true);
      expect(array.length).toBeLessThanOrEqual(300);

      array.forEach((item) => {
        expect(isInteger(item)).toBe(true);
      });
    });

    const customFuzzer = Fuzz.Fuzzer({
      array: Fuzz.array(),
      string: Fuzz.string(),
    });

    Fuzz.it(
      'Should test 100 custom fuzzers',
      customFuzzer(),
      ({ string, array }) => {
        expect.assertions(array.length + 3);

        expect(isString(string)).toBe(true);

        expect(isArray(array)).toBe(true);
        expect(array.length).toBeLessThanOrEqual(300);

        array.forEach((item) => {
          expect(isInteger(item)).toBe(true);
        });
      }
    );
  });
});
