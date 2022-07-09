global.fuzz = global.fuzz || {};

function fuzzTest(name, fuzzer, testRunner) {
  const iterations = global.fuzz.iterations || 100;

  const testCase = (index) => {
    test(`FUZZ-${index}`, () => {
      testRunner(fuzzer());
    });
  };

  describe(name, () => {
    for (let i = 0; i < iterations; i += 1) {
      testCase(i);
    }
  });
}

export default fuzzTest;
