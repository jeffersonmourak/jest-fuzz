"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.int = void 0;
const Fuzzer_1 = __importDefault(require("../Fuzzer"));
const numbers_1 = require("../helper/numbers");
const defaultOptions = {
    max: Infinity,
    min: -Infinity,
};
exports.int = (0, Fuzzer_1.default)((random, options) => {
    const newOptions = {
        ...defaultOptions,
        ...options,
    };
    return () => (0, numbers_1.int)(random, newOptions);
});
