import test from './fuzzTest';
import * as fuzzers from './fuzzers';
import Fuzzer from './Fuzzer';

const jestFuzz = {
  test,
  it: test,
  Fuzzer,
  ...fuzzers,
};

export default jestFuzz;
