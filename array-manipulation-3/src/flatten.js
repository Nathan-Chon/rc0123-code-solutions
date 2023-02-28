/* exported flatten */
/*
define a function, named 'flatten' that accepts on arguement, 'array'.
  return the concatination of the array to another array which pulls out arrays that are 1 iteration deep.
*/
function flatten(array) {
  return [].concat(...array);
}
