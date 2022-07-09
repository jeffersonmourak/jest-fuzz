import Fuzzer, { FuzzerBuildOptions, RandomFn } from '../Fuzzer';
import { int } from '../helper/numbers';
import { int as intFuzzer } from './int';

export interface ArrayFuzzerBuildOptions<T>
  extends Exclude<FuzzerBuildOptions, 'max'> {
  minLength?: number;
  length?: number;
  type: () => T;
}

const defaultOptions = {
  type: intFuzzer(),
  length: 300,
  minLength: 1,
};

function generateArray<T>(
  random: RandomFn,
  options: ArrayFuzzerBuildOptions<T>
) {
  const length = int(random, { min: options.minLength, max: options.length });
  const array = new Array(length).fill(0);

  return array.map(() => options.type());
}

export const array = Fuzzer(
  <T>(random: RandomFn, options: Partial<ArrayFuzzerBuildOptions<T>>) => {
    const newOptions = {
      ...defaultOptions,
      ...options,
    } as ArrayFuzzerBuildOptions<T>;

    if (newOptions.minLength === undefined || newOptions.minLength < 1) {
      throw new Error("Array Fuzzer: The minimum length can't be less than 1");
    }

    if (typeof newOptions.type !== 'function') {
      throw new Error(
        `Array Fuzzer: You can't use a ${typeof newOptions.type} as fuzzer.`
      );
    }

    return () => generateArray(random, newOptions);
  }
);
