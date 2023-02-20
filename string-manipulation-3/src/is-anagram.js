/* exported isAnagram */

function isAnagram(firstString, secondString) {
  firstString = firstString.replace(/\s/g, '');
  secondString = secondString.replace(/\s/g, '');
  var str1 = firstString.split('').sort().join('');
  var str2 = secondString.split('').sort().join('');
  if (str1 === str2) {
    return true;
  }
  return false;
}
