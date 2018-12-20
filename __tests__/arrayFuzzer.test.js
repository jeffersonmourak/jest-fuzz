const { isArray, isInteger, isString } = require('lodash');
const arrayFuzzer = require('../src/fuzzers/array');
const stringFuzzer = require('../src/fuzzers/string');

test('Should return an array of int', () => {
    const optionLessArray = arrayFuzzer()();

    expect.assertions(optionLessArray.length + 2);

    expect(isArray(optionLessArray)).toBe(true);
    expect(optionLessArray.length).toBeLessThanOrEqual(300);

    optionLessArray.forEach((item) => {
        expect(isInteger(item)).toBe(true);
    });
});

test('Should return an array of strings with 20 or less elements', () => {
    const options = {
        type: stringFuzzer(),
        length: 20,
    };
    const optionFullArray = arrayFuzzer(options)();

    expect.assertions(optionFullArray.length + 2);

    expect(isArray(optionFullArray)).toBe(true);
    expect(optionFullArray.length).toBeLessThanOrEqual(20);

    optionFullArray.forEach((item) => {
        expect(isString(item)).toBe(true);
    });
});
