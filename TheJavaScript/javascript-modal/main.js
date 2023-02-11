var $openModal = document.querySelector('.button-first');
var $surveyClose = document.querySelector('.button-second');

$openModal.addEventListener('click', function (event) {
  var $hidden = document.querySelector('.hidden');
  $hidden.className = 'row';
});

$surveyClose.addEventListener('click', function (event) {
  var $row = document.querySelector('.row');
  $row.className = 'hidden';
});
