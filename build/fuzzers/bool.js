"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bool = void 0;
const Fuzzer_1 = __importDefault(require("../Fuzzer"));
const numbers_1 = require("../helper/numbers");
const defaultOptions = {
    max: 11,
    min: 0,
};
exports.bool = (0, Fuzzer_1.default)((random) => () => !!((0, numbers_1.int)(random, defaultOptions) % 2));
