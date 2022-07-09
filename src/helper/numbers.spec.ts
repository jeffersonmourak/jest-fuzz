import { int, float, getRandomFloat, getRandomInt } from './numbers';
import { isFloat } from 'lodash';

describe('Helpers: number', () => {
  describe('getRandomFloat(random: RandomFn, options: FuzzerBuildOptions = {})', () => {
    it('Should return an random float', () => {
      const float = getRandomFloat(Math.random);

      expect(float.toString().includes('.')).toBe(true);
    });

    it('Should return an random float with constraints', () => {
      const float = getRandomFloat(Math.random, { min: 0, max: 2 });

      expect(float.toString().includes('.')).toBe(true);
      expect(float >= 0 && float <= 2).toBe(true);
    });
  });

  describe('getRandomFloat(random: RandomFn, options: FuzzerBuildOptions = {})', () => {
    it('Should return an random float', () => {
      const int = getRandomInt(Math.random);

      expect(int.toString().includes('.')).toBe(false);
    });

    it('Should return an random float with constraints', () => {
      const int = getRandomInt(Math.random, { min: 0, max: 2 });

      expect(int.toString().includes('.')).toBe(false);
      expect(int >= 0 && int <= 2).toBe(true);
    });
  });

  describe('int(random: RandomFn, options: FuzzerBuildOptions = {})', () => {
    it('Should return an random int', () => {
      const optionLessInt = int(Math.random);
      const optionFullInt = int(Math.random, {
        min: 0,
        max: 2,
        maxSafe: 1,
      });

      expect(Number.isInteger(optionLessInt)).toBe(true);
      expect(Number.isInteger(optionFullInt)).toBe(true);
    });
  });

  describe('float(random: RandomFn, options: FuzzerBuildOptions = {})', () => {
    it('Should return an random float', () => {
      const optionLessFloat = float(Math.random);
      const optionFullFloat = float(Math.random, {
        min: 0,
        max: 2,
        maxSafe: 1,
      });

      expect(parseFloat(optionLessFloat.toString()) === optionLessFloat).toBe(
        true
      );
      expect(parseFloat(optionFullFloat.toString()) === optionFullFloat).toBe(
        true
      );
    });
  });
});
