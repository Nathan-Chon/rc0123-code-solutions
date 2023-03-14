let count = 3;
var timerId = setInterval(counting, 1000);

function counting() {
  if (count === 0) {
    count = 'Blast off!';
    clearInterval(timerId);
  }
  console.log(count);
  --count;
}

// var $countdownDisplay = document.querySelector('.countdown-display');
// var text = ['4', '3', '2', '1', '~Earth Beeeelooowww Us~'];
// var counter = 0;
// var timerId = setInterval(countdown, 1000);
// function countdown() {
//   $countdownDisplay.textContent = text[counter];
//   counter++;
//   if (counter >= text.length) {
//     clearInterval(timerId);
//     counter = 4;
//   }
// }
