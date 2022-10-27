import { describe, expect, test } from 'vitest';
import { NumberAdder } from './adder.js';

const tests = [
  ['1 + 1 = 2', new NumberAdder(), [1, 1], 2],
  ['2 + 2 = 4', new NumberAdder(), [2, 2], 4],
] as const;

describe('NumberAdder', () => {
  describe('#sum', () => {
    test.each(tests)('%s', (_name, adder, input, expected) => {
      const result = adder.sum(...input);

      expect(result).toBe(expected);
    });
  });
});
