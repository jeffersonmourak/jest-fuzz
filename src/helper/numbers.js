function getNumber(random, options = {}) {
    const newOptions = {
        ...options,
    };

    if (newOptions.maxSafe === undefined) {
        newOptions.maxSafe = Number.MAX_SAFE_INTEGER;
    }

    if (!isFinite(newOptions.max)) {
        newOptions.max = newOptions.maxSafe;
    }

    if (!isFinite(newOptions.min)) {
        newOptions.min = newOptions.maxSafe / 2;
    }


    return ~~((random() * newOptions.maxSafe) % newOptions.max) + newOptions.min;
}

function buildFloat(random, options) {
    const base = getNumber(random, options);


    return parseFloat(`${base}.${getNumber(random, { min: 0, max: 99 })}`);
}

module.exports = {
    int: (random, options) => ~~getNumber(random, options),
    float: (random, options) => buildFloat(random, options),
};
