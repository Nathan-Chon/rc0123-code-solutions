/* exported ransomCase */
/*
Define a function, named 'ransomCase', that accepts 1 arguements, 'string'.
  declare a variable named 'result' and assign it to an empty string.
    Begin a loop that iterates through the string, where
      for each index of the array:
        Create an if statement that determines if the value is:
          even or not.
        Add the character in capictals depending if itis odd or even.
    Return the value of 'result'.
*/
function ransomCase(string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if ((i + 1) % 2 === 0) {
      result += string[i].toUpperCase();
    } else if ((i) % 2 === 0) {
      result += string[i].toLowerCase();
    }
  }
  return result;
}
