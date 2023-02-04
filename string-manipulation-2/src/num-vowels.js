/* exported numVowels */
/*
Define a function, named 'numVowels', that accepts 1 arguements, 'string'.
  declare a variable named 'result' and assign it to the string value that is in lower case.
  declare a variable named 'vowel' and assign it to 0.
    Begin a loop that iterates through the string, where
      for each index of the array:
        Create an if statement that determines if the value is:
          a vowel.
        Add the number value to the vowel.
    Return the value of vowel result.
*/
function numVowels(string) {
  var result = string.toLowerCase();
  var vowel = 0;
  for (var i = 0; i < result.length; i++) {
    if (result[i] === 'a' || result[i] === 'e' || result[i] === 'i' || result[i] === 'o' || result[i] === 'u') {
      vowel++;
    }
  }
  return vowel;
}
