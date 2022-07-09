import { isBoolean } from 'lodash';
import { bool as boolFuzzer } from './bool';

describe('Bool Fuzzer', () => {
  it('Should return a boolean', () => {
    const boolean = boolFuzzer()();

    expect(isBoolean(boolean)).toBe(true);
  });
});
