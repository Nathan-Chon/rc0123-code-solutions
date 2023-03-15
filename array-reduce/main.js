const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((add, current) => add + current);
console.log('sum:', sum);

const product = numbers.reduce((times, current) => times * current);
console.log('product:', product);

const balance = account.reduce((transfer, current) => {
  if (current.type === 'deposit') {
    return transfer + current.amount;
  } else {
    return transfer - current.amount;
  }
}, 0);
console.log('balance:', balance);

const composite = traits.reduce((accumulator, currentValue) => Object.assign(currentValue, accumulator));
console.log('composite:', composite);
