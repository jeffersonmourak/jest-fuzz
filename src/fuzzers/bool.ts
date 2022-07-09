import Fuzzer, { RandomFn } from '../Fuzzer';
import { int } from '../helper/numbers';

const defaultOptions = {
  max: 11,
  min: 0,
};

export const bool = Fuzzer(
  (random: RandomFn) => () => !!(int(random, defaultOptions) % 2)
);
