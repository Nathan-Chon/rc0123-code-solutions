function ExampleConstructor() {
}

console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);

var anObject = new ExampleConstructor();
console.log('value of anObject', anObject);
console.log('typeof of anObject', typeof anObject);

var instance = anObject instanceof ExampleConstructor;

console.log('value of instance', instance);
