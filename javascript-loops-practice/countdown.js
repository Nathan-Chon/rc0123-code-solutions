/* exported countdown */
function countdown(number) {
  var arrayCount = [];
  for (var i = 0; i <= number; i++) {
    arrayCount.push(number - i);
  }
  return arrayCount;
}
