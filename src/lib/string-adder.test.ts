import { describe, expect, test } from 'vitest';
import { StringAdder } from './adder.js';

const tests = [
  {
    name: 'hello + world = helloworld',
    adder: new StringAdder(),
    input: ['hello', 'world'],
    expected: 'helloworld',
  },
  {
    name: 'what + the + hell = what the hell',
    adder: new StringAdder(' '),
    input: ['what', 'the', 'hell'],
    expected: 'what the hell',
  },
].map((testCase) => ({
  ...testCase,
  toString() {
    return this.name;
  },
}));

describe('StringAdder', () => {
  describe('#sum', () => {
    test.each(tests)('%s', ({ adder, input, expected }) => {
      const result = adder.sum(...input);

      expect(result).toBe(expected);
    });
  });
});
