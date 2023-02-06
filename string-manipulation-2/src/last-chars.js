/* exported lastChars */
/*
Define a function, named 'lastChars', that accepts 2 arguements, 'length', 'string'.
    Return the value of string that is sliced at the negative length result.
*/
function lastChars(length, string) {
  return string.slice(-length);
}
