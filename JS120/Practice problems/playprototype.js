
// play with prototype

class Cat {
  constructor(name) {
  	this.name = name;
  }
  speak() {
  	console.log(`this is meeeow ${this.name}`);
  }
}

const cantSpeak = {
  speak() {
  	console.log(`I AM ${this.wontSpeak}`); // logs I AM undefined
  },
}

let cat = new Cat('Exo');
let pureBread = new Cat('kitty');

// cat.speak();
// console.log(cat.constructor);
Object.setPrototypeOf(cat, cantSpeak); // changes the prototype of cat

// cat.speak();
// console.log(cat.constructor);

// Cat.prototype.property = function() {
//   console.log(`am I a property of ${this.super()}`);
// }

// console.log(pureBread.constructor.prototype)
console.log(cantSpeak.constructor)
console.log(cantSpeak.constructor === cat.constructor);