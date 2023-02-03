/* exported compact */
/*
Define a function, named 'compact', that accepts one arguement, 'array'.
  declare a variable named 'newArray' as an empty array.
  being a loop that iterates through the entire 'array', where
    for each index in the array:
      Create an if statement that determines if the code contains any of the not allowed values.
      Add the values to 'newAray'.
    return the value of newArray.
*/
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== 0 && array[i] !== undefined && array[i] !== '' && !Number.isNaN(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
