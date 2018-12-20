const numbersHelper = require('../src/helper/numbers');

test('Should return an random int', () => {
    const optionLessInt = numbersHelper.int(Math.random);
    const optionFullInt = numbersHelper.int(Math.random, { min: 0, max: 2, maxSafe: 1 });

    expect(Number.isInteger(optionLessInt)).toBe(true);
    expect(Number.isInteger(optionFullInt)).toBe(true);
});

test('Should return an random float', () => {
    const optionLessFloat = numbersHelper.float(Math.random);
    const optionFullFloat = numbersHelper.float(Math.random, { min: 0, max: 2, maxSafe: 1 });

    expect(parseFloat(optionLessFloat) === optionLessFloat).toBe(true);
    expect(parseFloat(optionFullFloat) === optionFullFloat).toBe(true);
});
