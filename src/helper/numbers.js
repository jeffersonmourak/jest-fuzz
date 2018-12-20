function getNumber(random, options) {
    const newOptions = {
        ...options,
    };

    if (options.maxSafe === undefined) {
        newOptions.maxSafe = Number.MAX_SAFE_INTEGER;
    }

    if (!isFinite(options.max)) {
        newOptions.max = options.maxSafe;
    }

    if (!isFinite(options.min)) {
        newOptions.min = options.maxSafe / 2;
    }

    return ~~((random() * options.maxSafe) % options.max) + options.min;
}

function buildFloat(random, options) {
    const base = getNumber(random, options);

    return parseFloat(`${base}.${getNumber(random, { min: 0, max: 99 })}`);
}

module.exports = {
    int: (random, options) => ~~getNumber(random, options),
    float: (random, options) => buildFloat(random, options),
};
