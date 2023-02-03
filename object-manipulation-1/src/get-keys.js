/* exported getKeys */
/*
Define a function named 'getKeys', that accepts one arguement, 'object'.
  Declare a variable named 'result' and assign it to an empty array.
  Begin a loop that iterates through an object.
    Declare a 'key' value that is located in the 'object' value.
    Push 'key' values into the empty array 'result'.
  Return the value of 'result' variable.
*/
function getKeys(object) {
  var result = [];
  for (var key in object) {
    result.push(key);
  }
  return result;
}
