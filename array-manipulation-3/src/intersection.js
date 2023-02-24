/* exported intersection */
function intersection(first, second) {
  var array = [];
  var newArray = [];
  var thirdArray = [];
  for (var i = 0; i < first.length; i++) {
    array.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    array.push(second[j]);
  }
  var start = false;
  var count = 0;
  for (var k = 0; k < array.length; k++) {
    for (var l = 0; l < newArray.length; l++) {
      if (array[k] === newArray[l]) {
        thirdArray.unshift(array[k]);
        start = true;
      }
    }
    count++;
    if (count === 1 && start === false) {
      newArray.push(array[k]);
    }
    start = false;
    count = 0;
  }
  return thirdArray;
}
