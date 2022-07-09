import Fuzzer, { FuzzerBuildOptions, RandomFn } from '../Fuzzer';
import { int } from '../helper/numbers';

const defaultOptions = {
  length: 125,
  sufix: '',
  prefix: '',
};

interface StringFuzzerOptions {
  length: number;
  prefix: string;
  sufix: string;
}

function getString(random, length) {
  const alphabet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charSet = new Array(length).fill('');

  return charSet
    .map(() => alphabet.charAt(int(random, { min: 0, max: alphabet.length })))
    .join('');
}

export const string = Fuzzer(
  (random: RandomFn, options: Partial<StringFuzzerOptions>) => {
    const newOptions = {
      ...defaultOptions,
      ...options,
    };

    return () =>
      `${newOptions.prefix}${getString(random, newOptions.length)}${
        newOptions.sufix
      }`;
  }
);
