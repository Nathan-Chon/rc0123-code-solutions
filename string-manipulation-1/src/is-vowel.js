/* exported isVowel */
/*
Define a function, named 'isVowel', that uses one argument, named 'char'.
  Create an if statement defining if the word is a vowel, both upper and lower cased.
    return the value true if vowel.
  return the value false if it is not.
*/
function isVowel(char) {
  if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
    return true;
  }
  return false;
}
