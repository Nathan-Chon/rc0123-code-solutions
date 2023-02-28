/* exported isPalindromic */
/*
Define a function, named 'isPalindromic', that accepts 1 arguements, 'string'.
  Declare a variable named 'reverse' and assign it to an empty string.
    set the string arguemnt to replace each space with nothing.
    Begin a loop that iterates through the string, where
      for each index of the array:
        add onto the enpty string reve5rse for every iteration.
    Create an if statement that determines if the value is:
     reverse is strictly equal to string.
      If so return true.
      if not return false.
*/
function isPalindromic(string) {
  var reverse = '';
  string = string.replace(/\s/g, '');
  for (var i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  if (reverse === string) {
    return true;
  }
  return false;
}
