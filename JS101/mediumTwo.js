// //unlucky days

// console.log('back at it again');

// //make me happy if you wrote that down to

// //function to take a year and return number of Friday 13ths that year

// //assume year > 1752 (year UK adopted Gregorian cal)

// function fridayThe13ths(year) {

// 	let setDay = 13; //default is set to 13
// 	//grab all the months
// 	//is 13th.day === 'Friday'

// 	let months = [...Array(12).keys()];


// 	let howMany = 0;

// 	months.forEach(month => {
// 		let thirteenth = new Date(year, month, setDay);
// 		let day = thirteenth.getDay(); // this is a built in method of the Date object
// 		let occurence = day === 5 ? 1 : 0;
// 		howMany += occurence;
// 	});

// 	return howMany;

// }

// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2

// function featured(num) {
// 	//odd number, multiple of 7
// 	//all digits occur exactly once
// 	if (num === 9876543201) {
// 		console.log("There is no possible number that fulfills those requirements.");
// 		return;
// 	}

// 	let isOdd = n => n % 2 === 1;
// 	let isMutipleOf7 = n => n % 7 === 0;
// 	let hasUniqueDigits = n => {
// 		let baseSet = String(n).split('');
// 		let uniqueSet = new Set(baseSet.slice());
// 		return baseSet.length === uniqueSet.size;
// 	};
// 	let isFeatured = n => (isOdd(n) && isMutipleOf7(n) && hasUniqueDigits(n));

// 	num++;

// 	while (!isFeatured(num) && num < 9876543201) {
// 		num++;
// 	}

// 	return num;


// }


// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."



/*
function sumSquareDifference(count) {
	//difference between sum of squares and square of sums
	let nums = [...Array(count+1).keys()].slice(1);

	let sumOfSquares = nums.slice()
						   .map(num => num**2)
						   .reduce((prev, curr) => prev + curr, 0);
	let rootOfSums = nums.slice()
						   .reduce((prev,curr) => prev + curr, 0);

	let squareOfSums = rootOfSums ** 2;

 	// console.log(sumOfSquares);

 	// console.log(squareOfSums);

	let diff = squareOfSums - sumOfSquares;

	console.log(diff);

	return diff;

}


sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150




function bubbleSort(numArray) {


	for (let i = 0; i < numArray.length; i++) {
		for (let i = 0; i < numArray.length + 1; i++) {
			if (numArray[i] > numArray[i+1]) {
				let temp = numArray[i];
				numArray[i] = numArray[i+1]; // [numArray[i],numArray[i+1]] = [numArray[i+1],numArray[i]];
				numArray[i+1] = temp;
				i++;
			}
		}
	}

	console.log(numArray);

	return numArray;


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


function longestSentence(longText) {
	let sentences = longText.match(/\w.*?[!?.]/g);

	let lengths = sentences.map(sentence => {
		let length = sentence.split(' ').length;
		return [sentence, length];
	})

	lengths.sort(compareSecondItem);

	function compareSecondItem(a,b) {
		if (a[1] === b[1]) {
			return 0;
		} else {
			return a[1] < b[1] ? -1 : 1;
		}
	}

	console.log(lengths[lengths.length-1][0]);
	console.log(`The longest sentence has ${lengths[lengths.length-1][1]} words.`);

}


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!

// The longest sentence has 6 words.

*/

























