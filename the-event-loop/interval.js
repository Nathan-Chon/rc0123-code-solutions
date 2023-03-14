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
