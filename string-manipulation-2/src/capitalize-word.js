/* exported capitalizeWord */
/*
Define a function, named 'capitalizeWord', that accepts 1 arguements, 'word'.
  Declare a variable named 'string' and assign it to an empty string.
  Create an if statement that determines if the value is:
    equal to javascript.
      If so add the specified 'JavaScript'.
      if not add the string that is capitalized at the beginning.
    Return the value of 'string' result.
*/
function capitalizeWord(word) {
  var string = '';
  if (word.toLowerCase() === 'javascript') {
    string = 'JavaScript';
  } else {
    string = word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return string;
}
