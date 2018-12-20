const Fuzzer = require('../Fuzzer');
const { int } = require('../helper/numbers');

const defaultOptions = {
    max: Infinity,
    min: -Infinity,
};

module.exports = Fuzzer((random, options) => {
    const newOptions = {
        ...defaultOptions,
        ...options,
    };

    return () => int(random, newOptions);
});
