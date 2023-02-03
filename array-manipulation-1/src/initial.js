/* exported initial */
/*
Define a function, named 'initial', that accepts one arguement, 'array'.
  declare a variable named 'newArray' as an empty array.
  being a loop that iterates through the entire 'array' except the last index, where
    for each index in the array:
      Add the values to 'newAray'.
    return the value of newArray.
*/
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
