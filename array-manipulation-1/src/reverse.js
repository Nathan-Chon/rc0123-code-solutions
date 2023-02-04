/* exported reverse */
/*
Define a function, named 'reverse', that accepts one arguement, 'array'.
  declare a variable named 'newArray' as an empty array.
  being a loop that iterates through the entire 'array', backwards
    for each index in the array:
      Pop the items from the 'array'.
      Add the values to 'newAray'.
    return the value of newArray.
*/
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array.pop());
  }
  return newArray;
}
