/* exported unique */
/*
Define a function, named 'unique', that accepts one arguement, 'array'.
  declare a variable named 'newArray' as an empty array.
  declare a variable named 'start' and assign it to false.
  declare a variable named 'count' and assign it to 0
  being a loop that iterates through the entire 'array' except the last index, where
    for each index in the array:
    we being a loop again that iterates through the entire 'newArray' except the last index, where
    for each index in the array:
      create an if statement that determines if the value of the array at i location is equal to the newArray at j location.
        if so change start to true and increment to the count variable
    Create an if staement for if the value of count is equal to 1 and the varaible start is equal to false
       we add the value from the array at the location i;
    change start to false
    change ocunt to 0
  return the value of newArray.
*/
function unique(array) {
  var newArray = [];
  var start = false;
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      if (array[i] === newArray[j]) {
        start = true;
      }
    }
    count++;
    if (count === 1 && start === false) {
      newArray.push(array[i]);
    }
    start = false;
    count = 0;
  }
  return newArray;
}
