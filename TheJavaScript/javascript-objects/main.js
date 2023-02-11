var student = {
  firstName: 'Nathan',
  lastName: 'Chon',
  age: 23
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Logistician';
console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Hyundai',
  model: 'Sontata',
  year: 2020
};
vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Max',
  type: 'Golden Retriever'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
