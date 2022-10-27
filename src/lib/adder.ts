interface Adder<T> {
  sum(...inputs: T[]): T;
}

export class NumberAdder implements Adder<number> {
  sum(...inputs: number[]): number {
    return inputs.reduce((acc, curr) => acc + curr, 0);
  }
}

export class StringAdder implements Adder<string> {
  constructor(public delimiter = '') {}

  sum(...inputs: string[]): string {
    return inputs.join(this.delimiter);
  }
}
