
// instanceof

function isInstanceOf(object1, object2) {

  if (object1 && object1.constructor === object2) { 
  	return `Yes, ${object1.constructor.name} is an instance of ${object2}`;
  };

  // starting at object1 current constructor check if = to object2
  let prototype = Object.getPrototypeOf(object1);
  while (prototype) {
  	if (prototype.constructor === object2) {
  	  return `Yes, ${object1.constructor.name} is an instance of ${object2}`;
  	};
  	prototype = Object.getPrototypeOf(prototype);
  }
  // keep going up the prototypal chain until reaching Object.prototyp
  return false;
}


class Mammal {}

class Animal extends Mammal {}

class Cat extends Animal {}

class BigCat extends Cat {}


let mammal = new Mammal();


let animal = new Animal();

let cat = new Cat();
let bigCat = new BigCat();

console.log(isInstanceOf(mammal, Mammal));
console.log(mammal instanceof Mammal);

console.log(mammal.constructor === Mammal)
console.log(isInstanceOf(mammal, Animal));
console.log(mammal instanceof Animal)
console.log(isInstanceOf(bigCat, Cat));
console.log(isInstanceOf(cat, BigCat));


