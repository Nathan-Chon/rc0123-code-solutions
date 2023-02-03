/* exported capitalize */
/*
Define a function, named 'capitalize', that uses one argument, named 'word'.
    return the first letter of the word in upper case and the rest of the word in lower case.
*/
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
