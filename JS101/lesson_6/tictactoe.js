
const rlSync = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const FIRST_MOVE = 'COMPUTER';

const WINNING_LINES = [
		[1,2,3],[4,5,6],[7,8,9], //rows
		[1,4,7],[2,5,8],[3,6,9], //columns
		[1,5,9],[3,5,7]
	];


function displayBoard(board) {
	console.clear();

	console.log(`You are ${HUMAN_MARKER} and Computer is ${COMPUTER_MARKER}`);
	console.log('');
	console.log(`     |     |`);
	console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
	console.log(`     |     |`);
	console.log('-----+-----+----');
	console.log(`     |     |`);
	console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
	console.log(`     |     |`);
	console.log('-----+-----+----');
	console.log(`     |     |`);
	console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
	console.log(`     |     |`);
	console.log('');
}

function initializeBoard() {
	let board = {};

	for (let square = 1; square <= 9; square++) {
		board[String(square)] = INITIAL_MARKER;
	}

	return board;
}

function prompt(msg) {
	console.log(`=> ${msg}`);
}

function emptySquares(board) {
	return Object.keys(board).filter(key=>board[key] === INITIAL_MARKER);
}


function playerChoosesSquare(board) {

	prompt(`Choose a square from ${emptySquares(board).join(', ')}`);

	let square; 

	while (true) {
		square = rlSync.question().trim(); //trim any white space
		if (emptySquares(board).includes(square)) break;
		prompt("Please enter a valid choice");
	}

	board[square] = HUMAN_MARKER;


}

function computerChoosesSquare(board) {
	let square;

	for (let index = 0; index < WINNING_LINES.length; index++) {

		let line = WINNING_LINES[index];

		square = immediateMove(line, board, COMPUTER_MARKER);

		if (!!square) break;

	}

	if (!square) {

		for (let index = 0; index < WINNING_LINES.length; index++) {

			let line = WINNING_LINES[index];

			square = immediateMove(line, board, HUMAN_MARKER);

			if (!!square) break;

		}
	}

	if (!square) {

		if (emptySquares(board).includes(String(5))) {
			square = String(5);
		} else {

			let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

			square = emptySquares(board)[randomIndex];
		}
	}

	board[square] = COMPUTER_MARKER;

	console.log(square);
	
}


function immediateMove(line, board, marker) {

	//find a way to count each line (if it has more than 2)
	let valueInLine = line.map(square=>board[square]);

	if (valueInLine.filter(val => val === marker).length === 2) {
		let unusedSquare = line.find(square=>board[square] === INITIAL_MARKER);
		if (!!unusedSquare) return unusedSquare;
	}

	return null;

}


function boardFull(board) {
	return emptySquares(board).length === 0;
}

function someoneWon(board) {
	return !!detectWinner(board);
}

function detectWinner(board) {

	for (let line = 0; line < WINNING_LINES.length; line++) {
		let [sq1, sq2, sq3] = WINNING_LINES[line];

		if (board[sq1] === HUMAN_MARKER &&
			board[sq2] === HUMAN_MARKER &&
			board[sq3] === HUMAN_MARKER) {
			return 'Player';
		} else if (board[sq1] === COMPUTER_MARKER &&
				   board[sq2] === COMPUTER_MARKER &&
				   board[sq3] === COMPUTER_MARKER) {
			return 'Computer';
		}
	}

	return null;

}

function chooseSquare(playerOne, board) {

	if (playerOne === 'P') {
		playerChoosesSquare(board);
	} else if (playerOne === 'C') {
		computerChoosesSquare(board);
	}

}

function flip(playerOne) {
	if (playerOne === 'P') {
		playerOne = 'C';
	} else if (playerOne === 'C') {
		playerOne = 'P';
	}
	return playerOne;
}

while (true) {
	let board = initializeBoard();
	displayBoard(board);
	prompt("Who moves first? Enter player or computer");
	let answer = rlSync.question().trim().toLowerCase();
	let playerOne = answer === 'player' ? 'P' : 'C';

	while (true) {
		displayBoard(board);

		chooseSquare(playerOne, board);
		playerOne = flip(playerOne);

		//break condition
		if (someoneWon(board) || boardFull(board)) break;
	}

	displayBoard(board);

	if (someoneWon(board)) {
		prompt(`${detectWinner(board)} won!`);

	} else {
		prompt("It's a tie!");
	}

	prompt("Would you like to play again? y/n");

	answer = rlSync.question().toLowerCase()[0];

	while (!['y','n'].includes(answer)) {
		prompt("Please enter a valid choice: y/n")
		answer = rlSync.question().toLowerCase()[0];
	}

	if (answer !== 'y') break;
}

prompt("Thanks for playing TicTacToe");


function joinOr(array, delimiter = ", ", ending = "or ") {

	if (array.length === 0) return "";
	if (array.length === 1) return array;
	if (array.length === 2) return array[0] + ending + array[1];

	let arrayEnd = array[array.length-1];
	let normalJoin = array.slice(0,array.length-1);

	let halfReturn = normalJoin.join(delimiter);

	let result = halfReturn + delimiter + ending + " " + arrayEnd;

	console.log(result);

	return result;

}


joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

















