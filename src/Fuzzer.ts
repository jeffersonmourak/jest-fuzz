export type RandomFn = () => number;
export interface FuzzerBuildOptions {
  maxSafe: number;
  max: number;
  min: number;
}

export type FuzzerFnGenerator<T, R = any> = (random: RandomFn, options: T) => R;

export type FuzzerObject = {
  [key: string]: () => any;
};

const { random } = Math;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type ObjectGenerator = { [key: string]: any };

const isObjectGenerator = (obj: any): obj is FuzzerObject => {
  return typeof obj === 'object';
};

const isFunctionGenerator = <T, R = any>(
  obj: any
): obj is FuzzerFnGenerator<T, R> => {
  return typeof obj === 'function';
};

function objectGenerator<T>(object: FuzzerObject): () => T {
  const objectKeys = Object.keys(object);

  return () =>
    objectKeys.reduce((model, key) => {
      const newModel = { ...model };

      const propFn = getProperty(object, key);

      const value = propFn();

      newModel[key] = value;

      return newModel;
    }, {} as T);
}

function Fuzzer<T>(generator: FuzzerObject): () => () => T;

function Fuzzer<T, R = any>(
  generator: FuzzerFnGenerator<T, R>
): (options?: T) => R;

function Fuzzer<T, R = any>(
  generator: FuzzerFnGenerator<T, R> | FuzzerObject
): (options?: T) => R | (() => T) | never {
  if (isObjectGenerator(generator)) {
    return () => objectGenerator<T>(generator);
  } else if (isFunctionGenerator(generator)) {
    return (options) => generator(random, options);
  }

  throw new Error("Fuzzer cannot be loaded, it's not a function or an object");
}

export default Fuzzer;
