var array = [
  {
    ibsn: '12382913-123891',
    title: 'Amazing World of Gumball',
    author: 'Ben Bocquelet'
  },
  {
    ibsn: '345735342-534256',
    title: 'Pokemon',
    author: 'Satoshi Tajiri'
  },
  {
    ibsn: '568905346-345274',
    title: 'How to Train your Dragon',
    author: 'Cressida Cowell'
  }
];
console.log('array:', array, 'typeof array:', typeof array);

var jArray = JSON.stringify(array);
console.log('jArray:', jArray, 'typeof jArray:', typeof jArray);

var string = '{"number":12382,"id":"23NTU4357","String name":"Nathan Chon"}';
console.log('string:', string, 'typeof string:', typeof string);

var jString = JSON.parse(string);
console.log('jString:', jString, 'typeof jString:', typeof jString);
