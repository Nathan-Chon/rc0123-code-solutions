var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    var $dataView = event.target.getAttribute('data-view');
    for (var i of $tab) {
      i.className = 'tab';
      if (i === event.target) {
        event.target.classList.add('active');
      }
    }
    for (var j of $view) {
      if (j.getAttribute('data-view') === $dataView) {
        j.classList.remove('hidden');
      } else {
        j.classList.add('hidden');
      }
    }
  }
});
