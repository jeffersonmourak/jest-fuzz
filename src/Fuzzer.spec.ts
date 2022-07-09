import Fuzzer, { FuzzerObject } from './Fuzzer';

describe('Fuzzer', () => {
  it('Should create a valid fuction fuzzer', () => {
    const fakeGenerator = jest.fn(
      (random, options) => `fuzz data - ${options}`
    );

    expect(Fuzzer(fakeGenerator)('options')).toBe('fuzz data - options');

    expect(fakeGenerator.mock.calls).toHaveLength(1);
    expect(fakeGenerator.mock.calls[0][1]).toBe('options');
  });

  it('Should create a valid object fuzzer', () => {
    const fakeGenerator = jest.fn().mockReturnValue('fuzz data');

    type FakeGenerator = {
      data: string;
    };

    const dataGenerator: FuzzerObject = { data: fakeGenerator };

    expect(Fuzzer<FakeGenerator>(dataGenerator)()()).toEqual({
      data: 'fuzz data',
    });

    expect(fakeGenerator.mock.calls).toHaveLength(1);
  });

  it('Should throw an error if not an object or a function passed', () => {
    const fakeGenerator = jest.fn().mockReturnValue('fuzz data');

    type FakeGenerator = {
      data: string;
    };

    const dataGenerator = 10 as any as FuzzerObject;

    expect(() => Fuzzer<FakeGenerator>(dataGenerator)()()).toThrow(
      "Fuzzer cannot be loaded, it's not a function or an object"
    );
  });
});
