// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

function filter(array, callback, context, ...args) {
  let filteredArray = [];
  for (let index = 0; index < array.length; index++) {
  	if (callback.call(context, array[index], ...args)) filteredArray.push(array[index]);
  }
  return filteredArray;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

function map(array, callback) {
  let mappedArray = [];
  for (let index = 0; index < array.length; index++) {
  	let value = callback(array[index]);
  	mappedArray.push(value);
  }
  return mappedArray;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]


function reduce(array, reducer, acc) {
  let index = 0;
  if (!acc && array.length) {
  	acc = array[0];
  	index = 1;
  }
  for (; index < array.length; index++) {
  	acc = reducer(acc, array[index]);
  }
  return acc;
}

function filterByReduce(array, callback) {
  const reducer = (acc, value) => (callback(value)) ? acc.concat(value) : acc;
  return array.reduce(reducer, []); 
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(filterByReduce(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filterByReduce(numbers, number => number < 0)); // => []
// console.log(filterByReduce(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filterByReduce(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

function mapByReduce(array, callback) {
  return array.reduce((mappedArray, current) => {
  	mappedArray.push(callback(current));
  	return mappedArray;
  }, []);
}


let numbers = [1, 2, 3, 4, 5];
console.log(mapByReduce(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(mapByReduce(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(mapByReduce(numbers, () => false));
// // => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(mapByReduce(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]




