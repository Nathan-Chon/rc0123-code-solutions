/* exported reverseWords */
/*
Define a function, named 'revserseWords', that accepts 1 arguements, 'string'.
  return a string that is put into an array for every character and reversed. Then replit the string at the spaces into an array and then reverse again and rejoin the words into a string.
*/
function reverseWords(string) {
  return string.split('').reverse().join('').split(' ').reverse().join(' ');
}
