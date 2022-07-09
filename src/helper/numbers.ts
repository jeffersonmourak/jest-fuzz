import { FuzzerBuildOptions, RandomFn } from '../Fuzzer';

const getDefaults = (
  options: Partial<FuzzerBuildOptions> = {}
): FuzzerBuildOptions => {
  const maxSafe = options.maxSafe ?? Number.MAX_SAFE_INTEGER;
  const max = options.max ?? maxSafe;
  const min = options.min ?? maxSafe / 2;

  return {
    max,
    min,
    maxSafe,
  };
};

export function getRandomInt(
  random: RandomFn,
  options?: Partial<FuzzerBuildOptions>
) {
  const { max, min } = getDefaults(options);

  const number = random() * (max - min) + min;

  return ~~number;
}

export function getRandomFloat(
  random: RandomFn,
  options?: Partial<FuzzerBuildOptions>
) {
  const base = Math.round(getRandomInt(random, options));
  const decimal = getRandomInt(random, { min: 0, max: 99 });
  return parseFloat(`${base}.${decimal}`);
}

export const int = (random: RandomFn, options?: Partial<FuzzerBuildOptions>) =>
  ~~getRandomInt(random, options);
export const float = (
  random: RandomFn,
  options?: Partial<FuzzerBuildOptions>
) => getRandomFloat(random, options);
