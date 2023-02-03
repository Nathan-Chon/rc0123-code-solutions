/* exported isUpperCased */
/*
Define a function, named 'isUpperCased', that uses one argument, named 'word'.
  Create an if statement defining if the word is uppercased.
    return the value true if it is uppercased.
  return the value false if it is not.
*/
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
