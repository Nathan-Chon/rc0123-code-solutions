/* exported unique */
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
