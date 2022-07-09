"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = void 0;
const Fuzzer_1 = __importDefault(require("../Fuzzer"));
const numbers_1 = require("../helper/numbers");
const defaultOptions = {
    length: 125,
    sufix: '',
    prefix: '',
};
function getString(random, length) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charSet = new Array(length).fill('');
    return charSet
        .map(() => alphabet.charAt((0, numbers_1.int)(random, { min: 0, max: alphabet.length })))
        .join('');
}
exports.string = (0, Fuzzer_1.default)((random, options) => {
    const newOptions = {
        ...defaultOptions,
        ...options,
    };
    return () => `${newOptions.prefix}${getString(random, newOptions.length)}${newOptions.sufix}`;
});
