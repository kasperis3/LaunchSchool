class Cat {
  static genericGreeting() {
  	console.log(`Hello! I'm a cat!`);
  }

  constructor(name) {
  	this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  personalGreeting() {
  	this.greet();
  }

  rename(newName) {
  	this.name = newName;
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe
Cat.genericGreeting();
kitty.personalGreeting();

class Person {
  constructor(name = "John Doe") {
  	this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe