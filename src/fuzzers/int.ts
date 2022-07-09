import { FuzzerBuildOptions, RandomFn } from '../Fuzzer';

import Fuzzer from '../Fuzzer';
import { int as intGenerator } from '../helper/numbers';

const defaultOptions = {
  max: Infinity,
  min: -Infinity,
};

export const int = Fuzzer(
  (random: RandomFn, options?: Partial<FuzzerBuildOptions>) => {
    const newOptions = {
      ...defaultOptions,
      ...options,
    };

    return () => intGenerator(random, newOptions);
  }
);
