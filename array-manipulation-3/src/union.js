/* exported union */
/*
Define a function, named 'union', that accepts two arguement, 'first' and 'second'.
  declare a variable named 'array' as an empty array.
  being a loop that iterates through the entire 'first' array, where
    for each index in the array:
      push values from the first parameter into array variable.
    being a loop that iterates through the entire 'second' array, where
    for each index in the array:
      push values from the second parameter into array variable.
  return the array with a filter for every item that equals the index of the array.
*/
function union(first, second) {
  var array = [];
  for (var i = 0; i < first.length; i++) {
    array.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    array.push(second[j]);
  }

  return array.filter((item, index) => array.indexOf(item) === index);
}
