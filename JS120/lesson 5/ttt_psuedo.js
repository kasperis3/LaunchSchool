const readline = require('readline-sync');

function Square(marker) {
  this.marker = marker || Square.UNUSED_SQUARE;
}

Square.UNUSED_SQUARE = ' ';
Square.HUMAN_MARKER = 'X';
Square.COMPUTER_MARKER = 'O';

Square.prototype.toString = function() {
  return this.marker;
}

Square.prototype.setMarker = function(marker) {
  this.marker = marker;
}

Square.prototype.isUnused = function() {
  return this.marker === Square.UNUSED_SQUARE;
}

function Board() {
  this.squares = {};
  for (let counter = 1; counter < 10; counter++) {
  	this.squares[counter] = new Square();
  }
}

Board.prototype.availableSpaces = function() {
  let keys = Object.keys(this.squares);
  return keys.filter(key => this.squares[key].isUnused());
}

Board.prototype.isFull = function() {
  return this.availableSpaces().length === 0;
}

Board.prototype.markSquareAt = function(key, marker) {
  this.squares[key].setMarker(marker);
}

Board.prototype.countMarkersFor = function(player, keys) {
  let markers = keys.filter(key => {
  	return this.squares[key].toString() === player.getMarker();
  });

  return markers.length;
}

Board.prototype.display = function() {
  console.log("");
  console.log("    |   |");
  console.log(` ${this.squares["1"]}  | ${this.squares["2"]} | ${this.squares["3"]}`);
  console.log("    |   |");
  console.log("----+---+---");
  console.log("    |   |");
  console.log(` ${this.squares["4"]}  | ${this.squares["5"]} | ${this.squares["6"]}`);
  console.log("    |   |");
  console.log("----+---+---");
  console.log("    |   |");
  console.log(` ${this.squares["7"]}  | ${this.squares["8"]} | ${this.squares["9"]}`);
  console.log("    |   |");
  console.log("");
}

function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  return this.marker;
}

function Human() {
  Player.call(this, Square.HUMAN_MARKER);
}

Human.prototype = new Player();
Human.prototype.constructor = Human;

function Computer() {
  Player.call(this, Square.COMPUTER_MARKER);
}

Computer.prototype = new Player();
Computer.prototype.constructor = Computer;

function TTTGame() {
  this.human = new Human();
  this.computer = new Computer();
  this.board = new Board();
}

TTTGame.POSSIBLE_WINNING_MOVES = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
];

TTTGame.prototype.play = function() {
  this.displayWelcomeMessage();

  while (true) {
  	this.board.display();
  	this.humanMoves();
  	if (this.gameOver()) break;
  	this.computerMoves();
  	if (this.gameOver()) break;
  	console.clear();
  }

  this.displayResults();
  this.displayGoodbyeMessage();
}

TTTGame.prototype.displayWelcomeMessage = function() {
  console.log("Welcome to Tic Tac Toe!");
}

TTTGame.prototype.displayGoodbyeMessage = function() {
  console.log("Thanks for playing Tic Tac Toe! Goodbye!");
}

TTTGame.prototype.displayResults = function() {
  if (this.isWinner(this.human)) {
  	console.log("You win! Congratulations");
  } else if (this.isWinner(this.computer)) {
  	console.log("Computer wins!");
  } else {
  	console.log("It's a tie!");
  }
}

TTTGame.prototype.humanMoves = function() {
  let choice;
  while (true) {
  	let availableSpaces = this.board.availableSpaces();
  	choice = readline.question(`Choose a square from these available: ${availableSpaces.join(", ")} \n`);
    if (availableSpaces.includes(choice.trim())) break;
    console.log("Please pick a choice from the available spaces...");
  }
  this.board.markSquareAt(choice, this.human.getMarker());
}

TTTGame.prototype.computerMoves = function() {
  let availableSpaces = this.board.availableSpaces();
  let randomIndex = Math.floor(Math.random() * availableSpaces.length);
  let choice = availableSpaces[randomIndex];
  this.board.markSquareAt(choice, this.computer.getMarker());
}

TTTGame.prototype.gameOver = function() {
  return this.board.isFull() || this.someoneWon();
}

TTTGame.prototype.someoneWon = function() {
  return this.isWinner(this.human) || this.isWinner(this.computer);
}

TTTGame.prototype.isWinner = function(player) {
  return TTTGame.POSSIBLE_WINNING_MOVES.some(row => {
  	return this.board.countMarkersFor(player, row) === 3;
  });
}

let game = new TTTGame();
game.play();

