// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {}

// class Car extends Vehicle {}

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// let car = new Car(2015);
// console.log(car.year); // 2015

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//   	super(year);
//   	this.startEngine();
//   }

//   startEngine() {
//     console.log('Ready to go!')
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year, bedType) {
//   	super(year);
//   	this.bedType = bedType;
//   }
// }

// class Car extends Vehicle {}

// let truck1 = new Truck(2003, 'Short');
// console.log(truck1.year);
// console.log(truck1.bedType);


// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }

// class Truck extends Vehicle {
//   startEngine(speed) {
//   	return `${super.startEngine()} Drive ${speed}, please!`;
//   }
// }

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }

// let walkMixIn = {
//   walk() {
//   	return `Let's go for a walk!`;
//   }
// }

// Object.assign(Cat.prototype, walkMixIn);

// let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());


// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }

// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Maltese extends Dog {}

// Object.assign(Maltese.prototype, swimMixin);
// Object.assign(Fish.prototype, swimMixin);

// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");

// console.log(dog1.swim());
// console.log(fish1.swim());

// class Truck {}

// class Car {}

// let towMixIn = {
//   tow() {
//   	return `I can tow a trailer!`;
//   }
// }

// Object.assign(Truck.prototype, towMixIn);

// let truck = new Truck();
// console.log(truck.tow());

const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

class Vehicle {
  constructor(year) {
  	this.year = year;
  }
}

class Truck extends Vehicle {}

class Car extends Vehicle {}

Object.assign(Truck.prototype, towMixin);

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);



