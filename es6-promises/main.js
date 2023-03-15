import takeAChance from './take-a-chance.js';

var chance = takeAChance('Nathan');

chance.then(value => {
  console.log(value);
}).catch(error => {
  console.log(error.message);
  throw new Error('oh, no!');
});
