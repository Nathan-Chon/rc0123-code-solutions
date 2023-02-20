/* exported isPalindromic */
function isPalindromic(string) {
  var reverse = '';
  string = string.replace(/\s/g, '');
  for (var i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  if (reverse === string) {
    return true;
  }
  return false;
}
