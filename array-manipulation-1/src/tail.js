/* exported tail */
/*
Define a function, named 'tail', that accepts one arguement, 'array'.
  create a new variable that uses a rest property to remove the first element.
  return the value of newArray.
*/
function tail(array) {
  var [, ...newArray] = array;
  return newArray;
}
