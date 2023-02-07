/* exported takeRight */
function takeRight(array, count) {
  if (count < array.length) {
    var result = array.slice(array.length - count, array.length);
  } else {
    return array;
  }
  return result;
}
