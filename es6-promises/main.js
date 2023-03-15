import takeAChance from './take-a-chance.js';

var chance = takeAChance('Nathan');

chance.catch(error => {
  console.log(error.message);
  throw new Error('oh, no!');
}).then(value => {
  console.log(value);
});
