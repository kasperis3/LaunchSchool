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




