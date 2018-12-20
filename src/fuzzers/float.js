const Fuzzer = require('../Fuzzer');
const { float } = require('../helper/numbers');

const defaultOptions = {
    max: Infinity,
    min: -Infinity,
    maxSafe: Number.MAX_SAFE_INTEGER,
};

module.exports = Fuzzer((random, options) => {
    const newOptions = {
        ...defaultOptions,
        ...options,
    };

    return () => float(random, newOptions);
});
