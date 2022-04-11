


const REPLACEMENTS = 
{ 
	'ADJECTIVE': ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
	'NOUN': ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
	'VERB': ['jumps', 'lifts', 'bites', 'licks', 'pats'],
	'ADVERB': ['easily', 'lazily', 'noisily', 'excitedly']
};

function madlibs(template) {

	let sentence = template; //strings are immutable (a new one is created)

	for (let key in REPLACEMENTS) {
		let regex = new RegExp(`\\b${key}\\b`,'g');
		sentence = sentence.replace(regex, REPLACEMENTS[key][Math.floor(Math.random() * REPLACEMENTS[key].length)]);
	}

	console.log(sentence);
	return sentence;

}

let temp1 = "The ADJECTIVE brown NOUN ADVERB VERB the ADJECTIVE yellow NOUN, who ADVERB VERB his NOUN, and looks around.";
madlibs(temp1);


function transpose(matrix) {
	//3x3 matrix to transpose
	let elements = [...matrix[0], ...matrix[1], ...matrix[2]];
	let newMatrix = [];
	newMatrix.push(elements.filter(i => elements.indexOf(i) % 3 == 0));
	newMatrix.push(elements.filter(i => elements.indexOf(i) % 3 == 1));
	newMatrix.push(elements.filter(i => elements.indexOf(i) % 3 == 2));
	return newMatrix;
}


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]




function rotate90(matrix) {
	let rotatedMatrix = [];
	let MAX_COLUMN_LENGTH = matrix[0].length;
	let MAX_ROW_LENGTH = matrix.length - 1; //assumes matrix has at least one element
	for (let column = 0; column < MAX_COLUMN_LENGTH; column++) {
		let new_row = [];
		for (let row = MAX_ROW_LENGTH; row >= 0; row--) {
			let next_element = matrix[row][column];
			new_row.push(next_element);
		}
		rotatedMatrix.push(new_row);
	}

	return rotatedMatrix;

}


let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]





function merge(sortedList1, sortedList2) {	

	let i = 0;
	let j = 0;
	let merged = [];

	while ((i < sortedList1.length) && (j < sortedList2.length)) {

		if (sortedList1[i] <= sortedList2[j]) {
			merged.push(sortedList1[i++]); //post increment operator
		} else {
			merged.push(sortedList2[j++]);
		}

	}

	if (i >= sortedList1.length) {
		// let ending = sortedList2.slice(j);
		merged = [...merged, ...sortedList2.slice(j)];
		// merged.push(sortedList2.slice(j))
	} else {
		// merged.push(sortedList1.slice(i));
		merged = [...merged, ...sortedList1.slice(i)];

	}

	// console.log(merged);
	return merged;

}


merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]


function mergeSort(numArray) {

	let length = numArray.length;

	if (length === 1) {
		return numArray;
	} else {
		let middle = length / 2;
		let firstHalf = mergeSort(numArray.slice(0,middle));
		let secondHalf = mergeSort(numArray.slice(middle));
		let result = merge(firstHalf,secondHalf);
		return result;
	}

}


console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]


function binarySearch(array, searchItem) {


	let index = binarySearchHelper(array, searchItem, 0);

	return index;


}

function binarySearchHelper(array, searchItem, indexTracker) {

	let middle = Math.floor(array.length / 2);

	if ((middle === 0) && (array[middle] !== searchItem)) return -1;

	if (array[middle] === searchItem) {
		return middle + indexTracker;
	} else if (array[middle] > searchItem) {
		return binarySearchHelper(array.slice(0, middle), searchItem, indexTracker);
	} else if (array[middle] < searchItem) {
		return binarySearchHelper(array.slice(middle), searchItem, middle + indexTracker);
	} 


}


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

const Fraction = require('fraction.js');

function egyptian(fraction) {

	//return array with denominators;
	let denominators = [];

	let unitFraction = 1;

	while (fraction > 0) {
		let nextDenominator = new Fraction(1, unitFraction);

		if (nextDenominator <= fraction) {
			fraction = fraction.sub(nextDenominator);
			denominators.push(nextDenominator.d);
		}
		unitFraction++;
	}

	return denominators;

}


function unegyptian(array) {
	return array.reduce((prev, curr) => prev + new Fraction(1, curr), new Fraction(0));
}


console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
































