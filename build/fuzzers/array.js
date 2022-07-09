"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = void 0;
const Fuzzer_1 = __importDefault(require("../Fuzzer"));
const numbers_1 = require("../helper/numbers");
const int_1 = require("./int");
const defaultOptions = {
    type: (0, int_1.int)(),
    length: 300,
    minLength: 1,
};
function generateArray(random, options) {
    const length = (0, numbers_1.int)(random, { min: options.minLength, max: options.length });
    const array = new Array(length).fill(0);
    return array.map(() => options.type());
}
exports.array = (0, Fuzzer_1.default)((random, options) => {
    const newOptions = {
        ...defaultOptions,
        ...options,
    };
    if (newOptions.minLength ?? 0 < 1) {
        throw new Error("Array Fuzzer: The minimum length can't be less than 1");
    }
    if (typeof newOptions.type !== 'function') {
        throw new Error(`Array Fuzzer: You can't use a ${typeof newOptions.type} as fuzzer.`);
    }
    return () => generateArray(random, newOptions);
});
