function ExampleConstructor() {
}

console.log('value of prototype:', Object.getPrototypeOf(ExampleConstructor));
console.log('typeof prototype:', typeof Object.getPrototypeOf(ExampleConstructor));

var afunction = new ExampleConstructor();
console.log('value of afunction', afunction);

var instance = afunction instanceof ExampleConstructor;

console.log('value of instance', instance);
