import Fuzzer, { FuzzerBuildOptions, RandomFn } from '../Fuzzer';
import { float as floatGenerator } from '../helper/numbers';

const defaultOptions = {
  max: Infinity,
  min: -Infinity,
};

export const float = Fuzzer(
  (random: RandomFn, options: Partial<FuzzerBuildOptions>) => {
    const newOptions = {
      ...defaultOptions,
      ...options,
    };

    return () => floatGenerator(random, newOptions);
  }
);
