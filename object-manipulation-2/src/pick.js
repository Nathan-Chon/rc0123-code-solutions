/* exported pick */
function pick(source, keys) {
  var result = {};
  for (var key in source) {
    if (source[key] === undefined) {
      continue;
    } else if (keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
