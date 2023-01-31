var num1 = 15;
var num2 = 30;
var num3 = 45;
var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Dr Strange', 'Iron Man', 'Hulk'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Minecraft for Beginners',
    author: 'Mojang AB'
  },
  {
    title: 'Diary of a Wimpy Kid',
    author: 'JJeff Kinney'
  },
  {
    title: 'How to Train Your Dragon',
    author: 'Cressida Cowell'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Nathan Chon';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
