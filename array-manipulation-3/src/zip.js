/* exported zip */
/*
Define a function, named 'zip', that accepts two arguement, 'first' and 'second'.
  declare a variable named 'newArray' as an empty array.
  begin a loop that iterates through the entire 'first' parameter, where
    for each index in the array:
    create an if statement that determines if the length of the first array is larger than the second array.
      if so remove the last item of the first array.
    Add the values to 'newAray' at each location of i and for for first and second arrays.
  return the value of newArray.
*/
function zip(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (first.length > second.length) {
      first.pop();
    }

    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
