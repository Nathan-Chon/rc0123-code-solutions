var $message = document.querySelector('.message');
function messageDelay() {
  $message.textContent = 'Hello There';
}

setTimeout(messageDelay, 2000);
