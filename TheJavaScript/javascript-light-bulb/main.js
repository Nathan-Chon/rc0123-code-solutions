var $colorChange2 = document.querySelector('.color-change-2');

$colorChange2.addEventListener('click', function (event) {
  var $row = document.querySelector('.row');
  $row.className = 'hide-1';
  var $hide = document.querySelector('.hide');
  $hide.className = 'row-1';
});

var $colorChange1 = document.querySelector('.color-change-1');

$colorChange1.addEventListener('click', function (event) {
  var $hide1 = document.querySelector('.hide-1');
  $hide1.className = 'row';
  var $row1 = document.querySelector('.row-1');
  $row1.className = 'hide';
});
