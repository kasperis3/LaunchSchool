//write common longest prefix string

// Input : ['flower','floor','flight']
// output: 'fl'

// all lower case

// leading substrings for first two indices
// find longest prefix among them
// repeat with all remaining elements

// return array of leading Substrings from string input
function leadingSubstrings(string) {
	let leadingSubstringArray = [];

	for (let index = 0; index < string.length; index++) {
		let slice = string.slice(0, index + 1);
		leadingSubstringArray.push(slice);
	}

	return leadingSubstringArray;
}

function longestPrefixBetweenTwo(substrings1, substrings2) {

	// input are two string arrays of all leading substrings
	// output will be longest string or empty string if no overlap
	let longestLength = 0;
	let longestPrefix = '';

	let maxIndex = Math.min(substrings1.length, substrings2.length);

	for (let index = 0; index < maxIndex; index++) {
		let substring1 = substrings1[index];
		let substring2 = substrings2[index];

		if (substrings2.includes(substring1) & (substring1.length > longestLength)) {
			longestLength = substring1.length;
			longestPrefix = substring1;
		} 

		if (substrings1.includes(substring2) & (substring2.length > longestLength)) {
			longestLength = substring2.length;
			longestPrefix = substring2;
		}
	}


	if (!longestLength) {
		return [];
	}

	return longestPrefix;

}

function longestPrefix(stringArray) {

	let longestPrefix = stringArray[0];

	for (let index = 1; index < stringArray.length; index++) {
		longestPrefix = leadingSubstrings(longestPrefix);
		let substrings2 = leadingSubstrings(stringArray[index]);
		let longestPrefixSoFar = longestPrefixBetweenTwo(longestPrefix, substrings2);
		if (!longestPrefixSoFar.length) return "";
		longestPrefix = longestPrefixSoFar;
	}

	return longestPrefix;

}


console.log(longestPrefix(['flower','flow','flight']));
console.log(longestPrefix(['interstate','interstellar','intersect','j']));



function smallerNumbersThanCurrent(array) {

	let smallerNumbersThanCurrent = [];

	for (let index = 0; index < array.length; index++) {
		let currentElement = array[index];
		let smallerElements = array.filter(el => el < currentElement);
		let currentElementCount = new Set(smallerElements);
		smallerNumbersThanCurrent.push(currentElementCount.size);
	}

	return smallerNumbersThanCurrent;

}


// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]



function minimumSum(array) {

	let currentMinimum = Number.MAX_SAFE_INTEGER;

	if (array.length < 5) return null;

	for (let index = 0; index < array.length - 4; index++) {
		let slice = array.slice(index, index + 5);
		let currentSum = slice.reduce((prev, curr) => prev + curr, 0);
		if (currentSum < currentMinimum) {
			currentMinimum = currentSum;
		}
	}

	return currentMinimum;

}

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return nil.

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".




function toWeirdCase(string) {

	let words = string.split(' ');

	for (let index = 0; index < words.length; index++) {
		if (index % 2 === 1) { //every second word === every odd position (index)
			let word = words[index];
			let letters = word.split('');
			for (let charIndex = 0; charIndex < letters.length; charIndex++) {
				if (charIndex % 4 === 3) { //every 4th letter === every third position (index)
					letters[charIndex] = letters[charIndex].toUpperCase();
				} 
			}
			word = letters.join('');
			words[index] = word;
		}
	}

	console.log(words.join(' '));
	return words.join(' ');


}




// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".


// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// input: array numbers
// output: array numbers (2 elements)
// algo:
//  sort the array
//  get the difference between each pair
//  find the least difference

function closestNumbers(numArray) {
  let copy = numArray.slice().sort((a,b)=>a-b);
  let values = [-1, -1];
  let difference = copy[copy.length-1]-copy[0];

  for (let index = 0; index < copy.length - 1; index++) {
    let element1 = copy[index];
    let element2 = copy[index + 1];
    let pairDiff = Math.abs(element1 - element2);
    if (pairDiff < difference) {
      difference = pairDiff;
      values[0] = element1;
      values[1] = element2;
    }
  }
  return values;
}

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

/*
inputs: string
output: character (from the string) that occurs LEAST OFTEN (from the string)
note: case insensitive (string.toLowerCase();)
algo:
iterate through the character array
for each character, iterate through rest of the array and count occurrences
if > 1, move on. if any element === 1 return.
*/

function leastCommonChar(string) {
  let caseString = string.toLowerCase();
  let charArray = caseString.split('');
  let leastCommonChar;
  let leastCommonCharCount = Number.MAX_SAFE_INTEGER;
  for (let index = 0; index < charArray.length; index++) {
    let currentChar = charArray[index];
    //make sure we haven't touched this letter already
    if (charArray.slice(0, index).includes(currentChar)) continue;
    // console.log(currentChar);
    let currentCharCount = 1;
    let subIndex = index + 1;
    while (subIndex < charArray.length) {
      if (charArray[subIndex] === currentChar) {
        currentCharCount++;
      }
      subIndex++;
    }
    // console.log(leastCommonChar);
    if (currentCharCount === 1) {
      // console.log(currentChar);
      return currentChar;
    }
    if (currentCharCount < leastCommonCharCount) {
      leastCommonCharCount = currentCharCount;
      leastCommonChar = currentChar;
    }
  }
  // console.log(leastCommonChar);
  return leastCommonChar;
}




console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".


function bubbleSort(array) {
	let swapFlag = 1;
	while (swapFlag === 1) {
		swapFlag = 0;
		for (let index = 0; index < array.length - 1; index++) {
			let currentEl = array[index];
			let nextEl = array[index + 1];
			if (currentEl > nextEl) {
				//perform a swap
				swapFlag = 1;
				array[index] = nextEl;
				array[index + 1] = currentEl;
			}
		}
	}

	return array;
}




let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// Create a function that reverses the letters in a string but keeps the
// digit characters in their current order.
// only numbers/letters in string

// input: string
// output: string
// switching letters, numbers don't change

// turn into charArray
// iterate, place each letter into separate array
// reverse the letters array 
// using the numbers as markers for their index, replace all other indices

function reverse(string) {
  let charArray = string.toLowerCase().split('');
  let letters = [];
  let numbersIndices = [];
  for (let index = 0; index < charArray.length; index++) {
    let currentChar = charArray[index];
    if ((currentChar >= 'a') && (currentChar <= 'z')) {
      letters.push(currentChar);
    } else {
      numbersIndices.push(index);
    } 
  }

  let reversedCharArray = letters.reverse();

  for (let index = 0; index < charArray.length; index++) {
    if (numbersIndices.includes(index)) continue;
    let reversedChar = reversedCharArray.shift();
    charArray[index] = reversedChar;
  }
  return charArray.join('');
}

// Examples:

console.log(reverse("ab89c") === "cb89a");
console.log(reverse("jkl5mn923o") === "onm5lk923j");
console.log(reverse("123a45") === "123a45");
console.log(reverse("abc1de") === "edc1ba");
// The tests above should print "true".

