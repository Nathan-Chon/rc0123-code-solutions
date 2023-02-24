/* exported union */
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
