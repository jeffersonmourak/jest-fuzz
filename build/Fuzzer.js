"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { random } = Math;
function getProperty(obj, key) {
    return obj[key];
}
const isObjectGenerator = (obj) => {
    return typeof obj === 'object';
};
const isFunctionGenerator = (obj) => {
    return typeof obj === 'function';
};
function objectGenerator(object) {
    const objectKeys = Object.keys(object);
    return () => objectKeys.reduce((model, key) => {
        const newModel = { ...model };
        const propFn = getProperty(object, key);
        const value = propFn();
        newModel[key] = value;
        return newModel;
    }, {});
}
function Fuzzer(generator) {
    if (isObjectGenerator(generator)) {
        return () => objectGenerator(generator);
    }
    else if (isFunctionGenerator(generator)) {
        return (options) => generator(random, options);
    }
    throw new Error("Fuzzer cannot be loaded, it's not a function or an object");
}
exports.default = Fuzzer;
