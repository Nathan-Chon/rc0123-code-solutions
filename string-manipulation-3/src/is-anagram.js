/* exported isAnagram */
/*
Define a function, named 'isAnagram', that accepts 2 arguements, 'firstString' and 'secondString'.
  set the firstString arguement to replace the space with nothing
  set the secondString arguement to replace the space with nothing
  Create a variable named str1 and assign it to the firstString parameter and add it to an array sort it and rejoin it back together.
  Create a variable named str2 and assign it to the secondString parameter and add it to an array sort it and rejoin it back together.
  Create an if statement that determines if the value is:
      str1 is strictly equal to str2.
      If so return true.
    if not return false.
*/
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
