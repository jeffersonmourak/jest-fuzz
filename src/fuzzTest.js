global.fuzz = global.fuzz || {};

function fuzzTest(name, fuzzer, testRunner) {
    const iterations = global.fuzz.iterations || 100;

    const testCase = index => test(`${name} -> FUZZ-${index}`, () => testRunner(fuzzer()));

    for (let i = 0; i < iterations; i += 1) {
        describe(name, testCase.bind(null, i));
    }
}

module.exports = fuzzTest;
