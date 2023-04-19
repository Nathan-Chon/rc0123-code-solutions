import { divideBy, evenNumbers, multiplyBy, toDollars } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents', () => {
    const number = 5;
    const result = toDollars(number);
    expect(result).toEqual('$5.00');
  });
});

describe('divideBy', () => {
  it('returns the divided numbers', () => {
    const numbers = [2, 4, 6, 10, 0];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([1, 2, 3, 5, 0]);
  });
});

describe('multiplyBy', () => {
  it('returns the multiplied object', () => {
    const numbers = {
      number: 6,
      numbers: 'seven',
      numbered: 7
    };
    const result = multiplyBy(numbers, 2);
    expect(result).toEqual({
      number: 12,
      numbers: 'seven',
      numbered: 14
    });
  });
});
