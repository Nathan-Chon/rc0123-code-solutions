/* exported swapChars */
/*
Define a function, named 'swapChars', that accepts 3 arguements, 'firstIndex', 'secondIndex', 'string'.
  declare a variable named 'first' and assign it to the first character
  declare a variable named 'second' and assign it to the second character
  declare a variable named 'newString' and assign it to an empty string.
    Begin a loop that iterates through the string, where
      for each index of the array:
        Create an if statement that determines if the value is:
          firstIndex, secondIndex, or other.
        Add the value to the newString
    Return the value of newString result.
*/
function swapChars(firstIndex, secondIndex, string) {
  var first = string[firstIndex];
  var second = string[secondIndex];
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += second;
    } else if (i === secondIndex) {
      newString += first;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
