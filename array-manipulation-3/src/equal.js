/* exported equal */
function equal(first, second) {
  if (first === second) return true;
  if (first.length !== second.length) return false;
  if (first == null || second == null) return false;
  for (var i = 0; i < first.length; ++i) {
    if (first[i] !== second[i]) return false;
  }
  return true;
}
