const intFuzzer = require('../src/fuzzers/int');

test('Should return a number', () => {
    const optionLessInt = intFuzzer()();
    const optionFullInt = intFuzzer()({ min: 0, max: 2 });

    expect(Number.isInteger(optionLessInt)).toBe(true);
    expect(Number.isInteger(optionFullInt)).toBe(true);
});
