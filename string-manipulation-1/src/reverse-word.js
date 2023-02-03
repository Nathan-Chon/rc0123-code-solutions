/* exported reverseWord */
/*
Define a function, named 'reverseWord', that uses one argument, named 'word'.
  create an empty string named string
  Begin a loop that iterates backwards through a string;
    for each index in the string:
      Place the indexed location into the empty string
  return the new value of the string.
*/
function reverseWord(word) {
  var string = '';
  for (var i = word.length - 1; i >= 0; i--) {
    string += word[i];
  }
  return string;
}
