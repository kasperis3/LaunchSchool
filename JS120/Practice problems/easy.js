// 1 rectangles

// class Rectangle {
//   constructor(width, length) {
//   	this.width = width;
//   	this.length = length;
//   }
//   getWidth() {
//   	return this.width;
//   }
//   getLength() {
//   	return this.length;
//   }
//   getArea() {
//   	return this.getWidth() * this.getLength();
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//   	super(length, length);
//   }
// }

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// 2 Fake cat

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype); // your implementation
// console.log(fakeCat.constructor);
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

// 3

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, fur) {
//   	super(name, age);
//   	this.fur = fur;
//   }
//   info() {
//   	return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

// 4

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//   	super(name, age, 4, 'cat', status);
//   }
//   introduce() {
//   	return super.introduce() + ` Meow meow!`
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//   	super(name, age, 4, 'dog', status);
//   	this.master = master;
//   }
//   greetMaster() {
//   	return `Hello ${this.master}! Woof, woof!`;
//   }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");

// 5

// class Vehicle {
//   constructor(make, model, wheels) {
//   	this.make = make;
//   	this.model = model;
//   }

//   info() {
//   	return `${this.make} ${this.model}`;
//   }

// }

// class Car extends Vehicle {
//   getWheels() {
//   	return 4;
//   }
// }

// class Motorcycle extends Vehicle {
//   getWheels() {
//   	return 2;
//   }
// }

// class Truck {
//   constructor(make, model, payload) {
//     super(make, model);
//     this.payload = payload;
//   }
//   getWheels() {
//   	return 6;
//   }
// }

// 6

// class Person {
//   greeting(text) {
//   	console.log(text);
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//   	super.greeting(text.toUpperCase());
//   }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// 7

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah extends Cat {
//   gait() {
//     return "runs";
//   }
// }

// let walkMixIn = {
//   walk() {
//   	return `${this.name} ${this.gait()} forward`;
//   }
// }

// Object.assign(Person.prototype, walkMixIn);
// Object.assign(Cat.prototype, walkMixIn);

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// 8 Pet Shelter

// class Pet {
//   static PETS_LIST = [];

//   constructor(species, name) {
//   	this.species = species;
//   	this.name = name;
//   	this.owner = null;
//   	Pet.PETS_LIST.push(this);
//   }
//   addOwner(owner) {
//   	this.owner = owner;
//   }
//   info() {
//   	return `a ${this.species} named ${this.name}`
//   }
//   static unadopted() {
//   	return Pet.PETS_LIST.filter(pet => pet.owner === null);
//   }
// }

// class Owner {
//   constructor(name) {
//   	this.name = name;
//   	this.pets = [];
//   }
//   addPet(pet) {
//   	this.pets.push(pet);
//   }
//   numberOfPets() {
//   	return this.pets.length;
//   }
// }

// class Shelter {
//   constructor() {
//   	this.adopters = {};
//   }
//   adopt(owner, pet) {
//   	owner.addPet(pet);
//   	pet.addOwner(owner);
//   	let keyExists = this.adopters[owner.name];
//   	if (!keyExists) {
//   	  this.adopters[owner.name] = owner;
//   	} 
//   }
//   printAdoptions() {
//   	let unadopted = Pet.unadopted();
//   	console.log(`The following animals are unadopted: `);
//   	unadopted.forEach(pet => console.log(pet.info()));
//   	console.log("");

//   	for (let owner in this.adopters) {
//   	  let pets = this.adopters[owner].pets; // this is an array
//   	  console.log(`${owner} has adopted the following pets: `);
//   	  pets.forEach(pet => {
//   	  	console.log(pet.info());
//   	  })
//   	  console.log("");
//   	}
//   }
// }

// let scotch = new Pet('cat', 'scotch');
// let pudgy      = new Pet('cat', 'Pudgy');
// let win       = new Pet('bearded dragon', 'win');
// let kenny      = new Pet('dog', 'Kenny');
// let seee      = new Pet('parakeet', 'Seee');
// let oly        = new Pet('dog', 'oly');
// let chest      = new Pet('fish', 'Chest');

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);


// 9 

class Banner {
  constructor(message) {
  	this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
  	let length = this.message.length;
  	return `+-${'-'.repeat(length)}-+`;
  }

  emptyLine() {
  	let length = this.message.length;
  	return `| ${' '.repeat(length)} |`;
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+




