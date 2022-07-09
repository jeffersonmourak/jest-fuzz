"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.float = exports.int = void 0;
function getNumber(random, options = {}) {
    const newOptions = {
        ...options,
    };
    if (newOptions.maxSafe === undefined) {
        newOptions.maxSafe = Number.MAX_SAFE_INTEGER;
    }
    if (!newOptions.max || !isFinite(newOptions.max)) {
        newOptions.max = newOptions.maxSafe;
    }
    if (!newOptions.min || !isFinite(newOptions.min)) {
        newOptions.min = newOptions.maxSafe / 2;
    }
    return ~~((random() * newOptions.maxSafe) % newOptions.max) + newOptions.min;
}
function buildFloat(random, options = {}) {
    const base = getNumber(random, options);
    return parseFloat(`${base}.${getNumber(random, { min: 0, max: 99 })}`);
}
const int = (random, options = {}) => ~~getNumber(random, options);
exports.int = int;
const float = (random, options = {}) => buildFloat(random, options);
exports.float = float;
