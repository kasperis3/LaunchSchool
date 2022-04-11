//1

function letterPercentages(string) {

	let neither = string.match(/[^a-z]/gi) || [];
	let lowercase = string.match(/[a-z]/g) || [];
	let uppercase = string.match(/[A-Z]/g) || [];

	let originalLength = string.length;

	lowercase = (lowercase.length / originalLength) * 100;
	uppercase = (uppercase.length / originalLength) * 100;
	neither = (neither.length / originalLength) * 100;

	let rest = {'lowercase' : "" + lowercase.toFixed(2),
			'uppercase' : "" + uppercase.toFixed(2),
			'neither' : "" + neither.toFixed(2)};

	console.log(rest);
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


//2

// function triangle(side1, side2, side3) {
// 	let isZero = side => side === 0;

// 	let sides = [side1, side2, side3];

// 	if (sides.some(isZero)) return 'invalid';

// 	sides.sort((a,b) => a-b);

// 	console.log(sides);

// 	if (sides[2] >= sides[1] + sides[0]) return 'invalid';

// 	if (sides[2] === sides[0]) {
// 		return 'equilateral';
// 	} else if ((sides[0] === sides[1]) || (sides[1] === sides[2])) {
// 		return 'isoceles'
// 	} else {
// 		return 'scalene'
// 	}

// }


// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

//3 

function triangle(angle1, angle2, angle3) {
	if (angle1 + angle2 + angle3 !== 180) return 'invalid';

	if (!angle1 || !angle2 || !angle3) return 'invalid';

	let isLessThan90 = angle => angle < 90;
	let isMoreThan90 = angle => angle > 90;
	let isExactly90 = angle => angle === 90;

	let angles = [angle1,angle2,angle3];

	if (angles.every(isLessThan90)) {
		return 'acute';
	} else if (angles.some(isMoreThan90)) {
		return 'obtuse';
	} else if (angles.some(isExactly90)) {
		return 'right';
	}

	console.log("this should never print");
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"