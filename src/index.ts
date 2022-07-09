import test from './fuzzTest';
import * as fuzzers from './fuzzers';
import Fuzzer from './Fuzzer';

const jestFuzz = {
  test,
  Fuzzer,
  ...fuzzers,
};

export default jestFuzz;
