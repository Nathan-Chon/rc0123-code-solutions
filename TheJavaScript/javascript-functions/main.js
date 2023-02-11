function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = '"' + 'Hey, ' + name + '"';
  return greeting;
}

var greetResult = greet('Nathan');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Nathan', lastName: 'Chon' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var last = array.length - 1;
  return array[last];
}
var getLastElementResult = getLastElement(['gas', 'propane', 'ethanol', 'diesel']);
console.log('getLastElementResult:', getLastElementResult);
