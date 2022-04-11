

// return true if string looks like a url, false if it does not


function isUrl(string) {

	if (string.split(' ').length > 1) return false;

	//now we can assume string is one word
	//let matching = new RegExp('^https?:\/\/\S+$');

	// console.log(string.match(/^https?:\/\/\S+$/));

	let isMatching = string.match(/^https?:\/\/\S+$/) || [];

	return !!(isMatching.length)

}





console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false


// delimited by commas, tabs and spaces
function fields(delimitedString) {

	let re = /[,\t ]+/;
	let delimitedArray = delimitedString.split(re);

	console.log(delimitedArray);

	return delimitedArray;

}





fields("Pete,201,Student");
// -> ['Pete', '201', 'Student']

fields("Pete \t 201    ,  TA");
// -> ['Pete', '201', 'TA']

fields("Pete \t 201");
// -> ['Pete', '201']

fields("Pete \n 201");
// -> ['Pete', '\n', '201']


function mysteryMath(stringEquation) {

	let s = stringEquation.replace(/[+\-\*\/]/,'?');

	console.log(s);
	return s;

}



mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'








function danish(sentence) {
	let s = sentence.replace(/\b(apple|blueberry|cherry)\b/,'danish');

	console.log(s);
	return s;
}






danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'


function formatDate(stringDate) {
	if (stringDate.split("-").length > 1) {
		return stringDate.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1');
	} else{
		return stringDate.replace(/(\d{4})\/(\d{2})\/(\d{2})/, '$3.$2.$1');
	}

}


console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)





























