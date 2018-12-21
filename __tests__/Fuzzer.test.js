const Fuzzer = require('../src/Fuzzer');

test('create a valid fuction fuzzer', () => {
    const fakeGenerator = jest.fn((random, options) => `fuzz data - ${options}`);

    expect(Fuzzer(fakeGenerator)('options')).toBe('fuzz data - options');

    expect(fakeGenerator.mock.calls).toHaveLength(1);
    expect(fakeGenerator.mock.calls[0][1]).toBe('options');
});

test('create a valid object fuzzer', () => {
    const fakeGenerator = jest.fn(() => 'fuzz data');

    expect(Fuzzer({ data: fakeGenerator })()())
        .toEqual({
            data: 'fuzz data',
        });

    expect(fakeGenerator.mock.calls).toHaveLength(1);
});
