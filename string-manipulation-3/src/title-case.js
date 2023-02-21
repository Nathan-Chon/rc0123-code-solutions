/* exported titleCase */

function titleCase(title) {
  var sentence = title.toLowerCase();
  var array = sentence.split(' ');
  var emptyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
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
  var newSentence = emptyArray.join(' ');
  var colonSplit = newSentence.split(': ');
  if (colonSplit.length === 2) {
    var capitalSecond = colonSplit[1].charAt(0).toUpperCase() + colonSplit[1].slice(1);
    var array3 = capitalSecond.split();
    colonSplit.splice(1);
    var array4 = colonSplit.concat(array3);
    colonSplit = array4;
  }
  var dashSplit = colonSplit.join(': ');
  var dashChange = dashSplit.split('-');
  if (dashChange.length === 2) {
    var dash2 = dashChange[1].charAt(0).toUpperCase() + dashChange[1].slice(1);
    var array6 = dash2.split();
    dashChange.splice(1);
    var array7 = dashChange.concat(array6);
    dashChange = array7;
  }
  return dashChange.join('-');
}
