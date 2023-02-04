/* exported truncate */
/*
Define a function, named 'truncate', that accepts 2 arguements, 'length', 'string'.
    Return the value of the sliced string and concatentate an elipses to the end of the string.
*/
function truncate(length, string) {
  return string.slice(0, length) + '...';
}
