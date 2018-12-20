const { isBoolean } = require('lodash');
const boolFuzzer = require('../src/fuzzers/bool');

test('Should return a boolean', () => {
    const boolean = boolFuzzer()();

    expect(isBoolean(boolean)).toBe(true);
});
