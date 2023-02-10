var currentIndex = 0;
var $quote = document.querySelectorAll('span');
document.addEventListener('keydown', function (event) {
  var $tracker = $quote.item(currentIndex);
  event.preventDefault();
  if ($tracker.innerText === event.key) {
    $tracker.setAttribute('class', 'correct');
    currentIndex++;
  } else {
    $tracker.setAttribute('class', 'incorrect');
  }
});
