var $countdownDisplay = document.querySelector('.countdown-display');
var text = ['3', '2', '1', '~Earth Beeeelooowww Us~'];
var counter = 0;
function countdown() {
  $countdownDisplay.textContent = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 3;
    clearInterval();
  }
}
setInterval(countdown, 1000);
