var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  if (event.target && event.target.nodeName === 'BUTTON') {
    console.log('event.target', event.target);
    console.log('event.target.tagName:', event.target.tagName);
    console.log('closest .task-list-item:', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  } else {
    console.log('event.target', event.target);
    console.log('event.target.tagName:', event.target.tagName);
  }
});
