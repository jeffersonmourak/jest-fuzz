const Fuzzer = require('../Fuzzer');
const { int } = require('../helper/numbers');
const intFuzzer = require('./int');

const defaultOptions = {
    type: intFuzzer(),
    length: 300,
    minLength: 1,
};

function generateArray(random, options) {
    const length = int(random, { min: options.minLength, max: options.length });
    const array = new Array(length).fill(0);

    return array.map(() => options.type());
}

module.exports = Fuzzer((random, options) => {
    const newOptions = {
        ...defaultOptions,
        ...options,
    };

    if (newOptions.minLength < 1) {
        throw new Error('Array Fuzzer: The minimum length can\'t be less than 1');
    }

    if (typeof newOptions.type !== 'function') {
        throw new Error(`Array Fuzzer: You can't use a ${typeof newOptions.type} as fuzzer.`);
    }

    return () => generateArray(random, newOptions);
});
