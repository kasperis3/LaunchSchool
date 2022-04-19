

function lightsOn(switches) {
  // ...
  let switchArray = [...Array(switches + 1).fill(1)];
  let resultArray = [];

  function flip(lightSwitch) {
  	return (lightSwitch === 1) ? 0 : 1;
  }

  let counter = 2;

  while (counter <= switches) {
  	// capture all the indices + 1 % counter === 0

  	for (let index = 1; index < switchArray.length; index++) { //we don't care about the first element (0-indexed)
  		if (index % counter === 0) 
  			switchArray[index] = flip(switchArray[index]);
  	}
  	counter++;
  }

  for (let index = 1; index < switchArray.length; index++) {
  	if (switchArray[index] === 1) {
  		resultArray.push(index);
  	}
  }

  return resultArray;

}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


function diamond(n) {

	function padding(numStars, n) {
		// each row must have n items
		let eitherSide = (n - numStars) / 2;
		// console.log(eitherSide);
		let rowResult = "*".repeat(numStars);
		// console.log(rowResult);
		console.log(" ".repeat(eitherSide), rowResult);
	}

	//display n x n grid of stars *

	let midPoint = Math.floor(n / 2);
	let row = 0;
	let numStars = 0;

	while (row <= midPoint) {

		numStars = 2*row + 1;

		padding(numStars, n);

		row++;

	}

	while (row < n) {

		numStars -= 2;

		padding(numStars, n);

		row++;
	}

}


diamond(1);
diamond(3);
diamond(5);
diamond(9);


let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];


function isBlockWord(string) {

	//BATCH

	// only use one letter per block, case insensitive

	let letters = string.split('');
	letters = letters.map(letter => letter.toUpperCase());
	//check for duplicates first
	if (letters.length !== new Set(letters).size) return false;

	for (let letter of letters) {
		letter = letter.toUpperCase()
		let thisBlock = blocks.filter(block => block.includes(letter));
		if (thisBlock.length) {
			let thisBlockLetters = thisBlock[0].split('');
			let index = thisBlockLetters.indexOf(letter);
			thisBlockLetters.splice(index, 1);
			let leftOver = thisBlockLetters.shift();
			if (letters.includes(leftOver)) {
				return false;
			}
		} 

	}
	return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false



function isBlockWordRegExp(string) {

	let blocks = [/B|O/gi, /X|K/gi, /D|Q/gi, /C|P/gi, /N|A/gi, /G|T/gi, /R|E/gi, /F|S/gi, /J|W/gi, /H|U/gi, /V|I/gi, /L|Y/gi, /Z|M/gi];

	return blocks.every(regExp => {
		return ((string.match(regExp) || []).length < 2);
	});

}

console.log("RIP");
console.log(isBlockWordRegExp('BATCH'));      // true
console.log(isBlockWordRegExp('BUTCH'));      // false
console.log(isBlockWordRegExp('jest'));       // true
console.log(isBlockWordRegExp('floW'));       // true
console.log(isBlockWordRegExp('APPLE'));      // false
console.log(isBlockWordRegExp('apple'));      // false
console.log(isBlockWordRegExp('apPLE'));      // false
console.log(isBlockWordRegExp('Box'));        // false

function star(n) {

	let center = Math.floor(n/2);
	let row = 0;
	let starGrid = [];

	while (row < center) {

		let array = [...Array(n).fill(' ')];
		array[center] = '*';
		let distanceFromCenter = center - row;
		array[center - distanceFromCenter] = '*';
		array[center + distanceFromCenter] = '*';
		let nthRow = array.join().replace(/\,/g,'');
		// console.log(nthRow); //instead of logging directly, store in ultimate array to display
		starGrid[center - distanceFromCenter] = nthRow;
		starGrid[center + distanceFromCenter] = nthRow;
		row++;

	}

	let centerRow = '*'.repeat(n);
	starGrid[center] = centerRow;

	starGrid.forEach(row => console.log(row));


}


star(7);
star(9);




























