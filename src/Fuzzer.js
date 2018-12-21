function objectGenerator(object) {
    const objectKeys = Object.keys(object);

    return () => objectKeys.reduce((model, key) => {
        const newModel = { ...model };

        newModel[key] = object[key]();

        return newModel;
    }, {});
}

function Fuzzer(generator) {
    const { random } = Math;

    switch (typeof generator) {
    case 'function':
        return options => generator(random, options);

    case 'object':
        return () => objectGenerator(generator);

    default:
        throw new Error('Fuzzer cannot be loaded, it\'s not a function or an object');
    }
}

module.exports = Fuzzer;
