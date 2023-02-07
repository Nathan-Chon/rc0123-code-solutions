/* exported drop */
function drop(array, count) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (count <= i) {
      result.push(array[i]);
    }
  }
  return result;
}
