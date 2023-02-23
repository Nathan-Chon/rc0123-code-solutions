var $image = document.querySelectorAll('.image');
var $circle = document.querySelectorAll('.circle');
var count = 0;
// eslint-disable-next-line no-unused-vars
var timerId = setInterval(change, 3000);

function change() {
  $image[count].classList.add('hidden');
  $circle[count].classList.replace('fas', 'far');
  count++;
  if (count >= $image.length) {
    count = 0;
  }
  $image[count].classList.remove('hidden');
  $circle[count].classList.replace('far', 'fas');
}

var $progressBubbles = document.querySelector('.progress-bubbles');

$progressBubbles.addEventListener('click', function (event) {
  if (event.target.matches('.circle')) {
    var $dataView = event.target.getAttribute('data-view');
    for (var i of $circle) {
      i.classList.replace('fas', 'far');
      if (i === event.target) {
        event.target.classList.replace('far', 'fas');
      }
    }
    for (var j of $image) {
      if (j.getAttribute('data-view') === $dataView) {
        j.classList.remove('hidden');
      } else {
        j.classList.add('hidden');
      }
    }
    count = Number($dataView);
  }
  clearInterval(timerId);
  timerId = setInterval(change, 3000);
});

var $lArrow = document.querySelector('.larrow');

$lArrow.addEventListener('click', function (event) {
  $image[count].classList.add('hidden');
  $circle[count].classList.replace('fas', 'far');
  count--;
  if (count < 0) {
    count = 4;
    $image[count].classList.remove('hidden');
    $circle[count].classList.replace('far', 'fas');
  } else {
    $image[count].classList.remove('hidden');
    $circle[count].classList.replace('far', 'fas');
  }
  clearInterval(timerId);
  timerId = setInterval(change, 3000);
});

var $rArrow = document.querySelector('.rarrow');

$rArrow.addEventListener('click', function (event) {
  $image[count].classList.add('hidden');
  $circle[count].classList.replace('fas', 'far');
  count++;
  if (count > 4) {
    count = 0;
    $image[count].classList.remove('hidden');
    $circle[count].classList.replace('far', 'fas');
  } else {
    $image[count].classList.remove('hidden');
    $circle[count].classList.replace('far', 'fas');
  }
  clearInterval(timerId);
  timerId = setInterval(change, 3000);
});
