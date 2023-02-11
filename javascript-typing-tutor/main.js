var currentIndex = 0;
var $quote = document.querySelectorAll('span');
document.addEventListener('keydown', function (event) {
  var $tracker = $quote.item(currentIndex);
  var $underline = $quote.item(currentIndex + 1);
  $tracker.setAttribute('class', 'underline');
  event.preventDefault();
  if ($tracker.innerText === event.key && currentIndex < 28) {
    $tracker.setAttribute('class', 'correct');
    $underline.setAttribute('class', 'underline');
    currentIndex++;
  } else if ($tracker.innerText === event.key && currentIndex >= 28) {
    $tracker.setAttribute('class', 'correct');
    $play.setAttribute('class', 'play');
  } else {
    $tracker.setAttribute('class', 'incorrect');
  }
});

var $play = document.querySelector('.play');
$play.addEventListener('click', function (event) {
  document.location.reload();
});
