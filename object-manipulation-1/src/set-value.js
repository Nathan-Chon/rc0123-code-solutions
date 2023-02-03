/* exported setValue */
/*
Define a function named 'setValue', that accepts three arguement, 'object', 'key', 'value'.
  Assign the 'key' value to the 'value' value to the 'object' value.
  Return the value of 'object' variable.
*/
function setValue(object, key, value) {
  object[key] = value;
  return object;
}
