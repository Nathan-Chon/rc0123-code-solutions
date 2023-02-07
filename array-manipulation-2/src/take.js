/* exported take */
function take(array, count) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (count - 1 >= i) {
      result.push(array[i]);
    }
  }
  return result;
}
