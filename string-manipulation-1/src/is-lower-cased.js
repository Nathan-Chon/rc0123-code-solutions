/* exported isLowerCased */
/*
Define a function, named 'isLowerCased', that uses one argument, named 'word'.
  Create an if statement defining if the word is lowercased.
    return the value true if it is lowercased.
  return the value false if it is not.
*/
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
