const test = require('./src/fuzzTest');
const fuzzers = require('./src/fuzzers');
const Fuzzer = require('./src/Fuzzer');

module.exports = {
    test,
    Fuzzer,
    ...fuzzers,
};
