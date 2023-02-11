var $contact = document.querySelector('#contact-form');
var object = {};

$contact.addEventListener('submit', function (event) {
  event.preventDefault();
  object.name = $contact.elements.name.value;
  object.email = $contact.elements.email.value;
  object.message = $contact.elements.message.value;
  console.log('messageData:', object);
  $contact.reset();
});
