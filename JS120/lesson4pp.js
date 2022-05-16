// lesson4pp.js

// class Greeting {
// 	greet(message) {
// 		console.log(message);
// 	}
// }

// class Hello extends Greeting {
// 	hi() {
// 		this.greet("Hello");
// 	}

// }

// class Goodbye extends Greeting {
// 	bye() {
// 		this.greet("Goodbye");
// 	}

// }

// let hello = new Hello();

// hello.hi();

// let goodbye = new Goodbye();

// goodbye.bye();

// If we have a Car class and a Truck class, how can you use the Speed object as a mix-in to make them goFast? 
// How can you check whether your Car or Truck can now go fast?

const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Car.prototype, Speed);
Object.assign(Truck.prototype, Speed);

console.log(Car.prototype.hasOwnProperty('goFast'));
console.log(Car)
console.log(Car.prototype)

let car = new Car();
car.goFast();
let truck = new Truck();
truck.goFast();

for (let key in car) {
  if (key === 'goFast') console.log(`Yo yo ${key}`);
}
console.log(car)
console.log(Object.keys(car));
// console.log(Object.keys(car.constructor.prototype))
console.log('goFast' in car)
console.log(car.hasOwnProperty('goFast'))
console.log(Car.prototype.constructor)

for (let key in Speed) console.log(key);

console.clear();

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }

}

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

const fuelSystem = {
  range() {
  	return this.fuelCap * this.fuelEfficiency;
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}


Object.assign(Catamaran.prototype, fuelSystem);
Object.assign(WheeledVehicle.prototype, fuelSystem);


function Cat(name) {
  this.name = name;
}

Cat.prototype.hear = function() {
  console.log(`${this.constructor.name} is listening`)
}

function Person(name) {
  return new Cat(name);
}

let bob = new Person('Bob');

console.log(bob instanceof Person);
console.log(bob instanceof Cat);

bob.hear();

console.log(bob.constructor)
console.log(bob.__proto__)











