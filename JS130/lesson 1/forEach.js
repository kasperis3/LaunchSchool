// "use strict";

function forEach(array, callback, context) {
  for (let index = 0; index < array.length; index += 1) {
  	callback.call(context, array[index], index, array);
  }
}

let arr = [1, 2, 3, 4];

forEach(arr, value => console.log(value * value));

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.showItem, foo);
// [4, 5, 6].forEach(foo.showItem);

forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

function forEachObject(obj, callback) {
  let entries = Object.entries(obj);
  for (let index = 0; index < entries.length; index++) {
  	let entryKey = entries[index][0];
  	let entryValue = entries[index][1];
  	let newValue = callback(entryValue);
  	obj[entryKey] = newValue;
  }
}