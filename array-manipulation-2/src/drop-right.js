/* exported dropRight */
function dropRight(array, count) {
  if (count < array.length) {
    var result = array.slice(0, array.length - count);
  } else {
    return array;
  }
  return result;
}
