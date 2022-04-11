

//2
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

//order by published year
let sortedByDate = books.sort((a,b) => {
	return Number(a.published) - Number(b.published);
});

console.log(sortedByDate);

// //5
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let males = Object.values(munsters).filter(object => object.gender === 'male');

// console.log(males.reduce((prev,curr)=> prev + curr.age,0));
	  
//6
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(munster => {
	let name = munster[0];
	let age = munster[1].age;
	let gender = munster[1].gender;
	name = name[0].toUpperCase() + name.slice(1);
	sentence = `${name} is a ${age}-year-old ${gender}`;
	console.log(sentence);
})

//8

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

//output all vowels

Object.values(obj).forEach(strArray => {
	strArray.forEach(string => {
		let match = string.match(/[aeiou]/gi).join();
		console.log(match);
	})
})

//9 return new array with same structure with each subArray sorted, ascending

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = [];

arr.forEach(array => {
	let slicedSorted = array.slice().sort((a,b) => {
		if (typeof a === 'string') {
			return a.charCodeAt()-b.charCodeAt();
		}
		return a-b;
	})
	sortedArr.push(slicedSorted);
	console.log(slicedSorted);
})

console.log(sortedArr);

//10 reverse above

let reverseArr = [];

arr.forEach(array => {
	let reverseSorted = array.slice().sort((a,b) => {
		if (typeof a === 'string') {
			return b.charCodeAt() - a.charCodeAt();
		}
		return b - a;
	})
	reverseArr.push(reverseSorted);
	console.log(reverseSorted);
})

console.log(reverseArr);

//11 use map method to increment each number val by one
//do not modify original object
arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arrMap = arr.map(object => {
	let cloneOfObject = Object.assign({},object);
	Object.keys(cloneOfObject).forEach(cloneKey => {
		cloneOfObject[cloneKey] += 1;
	})
	return cloneOfObject;
})

console.log(arrMap);
console.log(arr);


//12 return array identical in structure but must be multiple of 3
arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let divByThree = arr.map(subArray => {
	return subArray.filter(num => num % 3 === 0);
});

console.log(divByThree);

//13 sort array so subarrays are arranged by sum of odd numbers, smallest to largest

arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((arr1,arr2) => {
	let arr1ByThree = arr1.filter(x => x % 2 === 1);
	let arr2ByThree = arr2.filter(x => x % 2 === 1);
	let arr1Sum = arr1ByThree.reduce((prev,curr)=> prev+curr,0);
	let arr2Sum = arr2ByThree.reduce((prev,curr)=> prev+curr,0);
	return arr1Sum - arr2Sum;
})

console.log(arr);

//14 return array containing colors (capitalized) of fruits and sizes (uppercase) of vegetables

obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let foodArray = [];

Object.values(obj).forEach(val => {
	if (val.type === 'fruit') {
		let colorArray = val.colors;
		colorArray = colorArray.map(color => {
			return color[0].toUpperCase() + color.slice(1);
		})
		foodArray.push(colorArray);
	} else {
		foodArray.push(val.size.toUpperCase());
	}
})

console.log(foodArray);

//15 return array that contains objects with all even numbers
arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let isEven = val => val % 2 === 0;

let evenOnly = arr.filter(obj => {
	for (let key in obj) {
		if (!obj[key].every(isEven)) {
			return false
		}
	}
	return true;
})

console.log(evenOnly);

//16 return object where key = first item, value = second item
arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

console.log(Object.fromEntries(arr));

//17 return a UUID via function with no arguments

function buildX(array, length) {
	let string = '';
	for (let i = 0; i < length; i++) {
		let index = Math.floor(Math.random() * array.length);
		string += array[index];
	}
	return string;
}

function uniqueID() {
	let num = ['0','1','2','3','4','5','6','7','8','9'];
	let alpha = ['a','b','c','d','e','f'];
	let alphanum = [...num, ...alpha];

	//8-4-4-4-12
	let parts = [];
	let times = [8,4,4,4,12];
	times.forEach(length => {
		parts.push(buildX(alphanum,length));
	})
	return parts.join("-");
}

console.log(uniqueID());