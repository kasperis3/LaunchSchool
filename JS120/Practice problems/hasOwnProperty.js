// hasOwnProperty

function hasOwnProperty(obj, key) {
  // does this object have this key (not inherited)
  return Object.keys(obj).includes(key);
}

class Animal {}

class Mammal extends Animal {}

Animal.prototype.brainstem = function() {
  // STUB
}

Mammal.prototype.medulla = function() {
  // STUB
}


let ani = new Animal();
let mammi = new Mammal();

// console.log(hasOwnProperty(ani, 'brainstem'));
// console.log(hasOwnProperty(ani, 'medulla'));

ani.okay = 'a key named okay';

// console.log(hasOwnProperty(ani, 'okay'));

console.log(hasOwnProperty(ani, 'constructor'))



console.log(Object.getOwnPropertyNames(ani))

console.log(typeof ani)
console.log(typeof hasOwnProperty)