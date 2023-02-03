/* exported toObject */
/*
Define a function named 'toObject', that accepts one arguement, 'keyValuePair'.
  Declare and empty object variable named 'object'.
  Assign the first part of the array to the second part in the 'object'.
  Return the value of 'object' variable.
*/
function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
