/* exported capitalizeWords */
/*
Define a function, named 'capitalizeWords', that accepts 1 arguements, 'string'.
  declare a variable named 'result' and assign it to and empty string.
  Begin a loop that iterates through the string, where
    for each index of the string:
      Create an if statement that determines if the value:
        has a space before or begins at the first letter.
          Add the uppercased letter to the 'result' variable
        Else add the result as a lower case letter to the vairable 'result'.
  Return the value of result variable.
*/
function capitalizeWords(string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i - 1] === ' ' || i === 0) {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
}
