/* exported compact */
/*
Define a function, named 'compact', that accepts one arguement, 'array'.
  declare a variable named 'newArray' as an empty array.
  being a loop that iterates through the entire 'array', where
    for each index in the array:
      Create an if statement that determines if the code is truthy.
      Add the values to 'newAray'.
    return the value of newArray.
*/
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
