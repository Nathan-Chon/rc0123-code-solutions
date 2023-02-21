/* exported titleCase */

function titleCase(title) {
  var sentence = title.toLowerCase();
  var array = sentence.split(' ');
  var emptyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[0]) {
      emptyArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    } else if (array[i] === 'an' || array[i] === 'the' || array[i] === 'in' || array[i] === 'of' || array[i] === 'for' || array[i] === 'and' || array[i] === 'on' || array[i] === 'to') {
      emptyArray.push(array[i]);
    } else if (array[i] === 'javascript') {
      emptyArray.push('JavaScript');
    } else if (array[i] === 'api') {
      emptyArray.push('API');
    } else {
      emptyArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
  }
  var index = emptyArray.indexOf('Javascript:');
  if (index !== -1) {
    emptyArray[index] = 'JavaScript:';
  }
  return emptyArray.join(' ');
}
