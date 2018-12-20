const floatFuzzer = require('../src/fuzzers/float');

test('Should return a number', () => {
    const optionLessFloat = floatFuzzer()();
    const optionFullFloat = floatFuzzer()({ min: 0, max: 2 });

    expect(parseFloat(optionLessFloat) === optionLessFloat).toBe(true);
    expect(parseFloat(optionFullFloat) === optionFullFloat).toBe(true);
});
