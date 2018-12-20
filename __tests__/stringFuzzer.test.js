const { isString, startsWith, endsWith } = require('lodash');
const stringFuzzer = require('../src/fuzzers/string');

test('Should return a string', () => {
    const string = stringFuzzer({ length: 5 })();

    expect(string).toHaveLength(5);
    expect(isString(string)).toBe(true);
});

test('Should return a string with prefix text', () => {
    const string = stringFuzzer({ length: 5, prefix: 'hello' })();

    expect(string).toHaveLength(10);
    expect(startsWith(string, 'hello')).toBe(true);
});

test('Should return a string with sufix text', () => {
    const string = stringFuzzer({ length: 5, sufix: 'hello' })();

    expect(string).toHaveLength(10);
    expect(endsWith(string, 'hello')).toBe(true);
});
