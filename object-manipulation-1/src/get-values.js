/* exported getValues */
/*
Define a function named 'getValues', that accepts one arguement, 'object'.
  Declare a variable named 'values' and assign it to an empty array.
  Begin a loop that iterates through an object.
    Declare a 'key' value that is located in the 'object' value.
    Push 'object' 'key' values into the empty array 'values'.
  Return the value of 'values' variable.
*/
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
