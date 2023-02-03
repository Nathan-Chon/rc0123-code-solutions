/* exported getWords */
/*
Define a function, named 'getWords', that uses one argument, named 'string'.
  create a variable named array.
  Create an if statement defining if the words length is greater than one.
    Return the value that splits the characters at its spaces into an array.
  return the value array if it is less than 1 character long.
*/
function getWords(string) {
  var array = [];
  if (string.length > 1) {
    return string.split(' ');
  }
  return array;
}
