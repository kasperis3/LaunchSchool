let readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter < 10; counter++) {
      this.squares[counter] = new Square();
    }
  }

  availableSpaces() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  isUnusedKey(key) {
    return this.squares[key].isUnused();
  }

  isFull() {
    return this.availableSpaces().length === 0;
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].toString() === player.getMarker();
    });

    return markers.length;
  }

  display() {
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
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_MOVES = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ];

  static MATCH_GOAL = 3;

  constructor() {
    this.human = new Human();
    this.computer = new Computer();
    this.board = new Board();
    this.numGames = 0;
  }

  playMatch() {
    this.displayWelcomeMessage();

    while (!this.isMatchOver()) {
      this.play();
      this.numGames += 1;
      this.displayResults();
    }

    this.displayMatchResults();

    this.displayGoodbyeMessage();
  }

  play() {
    this.board = new Board();
    if (this.numGames % 2 === 1) {
      console.log(`Computer goes first!`);
      this.computerMoves();
    }
    while (true) {
      this.board.display();
      this.humanMoves(); 
      if (this.gameOver()) break;
      this.computerMoves();
      if (this.gameOver()) break;
    }
  }

  isMatchOver() {
    return this.human.score === TTTGame.MATCH_GOAL || this.computer.score === TTTGame.MATCH_GOAL;
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      this.human.score += 1;
      console.log("You win! Congratulations");
    } else if (this.isWinner(this.computer)) {
      this.computer.score += 1;
      console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    }
    console.log(`You have ${this.human.score} wins, Computer has ${this.computer.score} wins. First to ${TTTGame.MATCH_GOAL} wins the match!`)
  }

  displayMatchResults() {
    if (this.isMatchWinner(this.human)) {
      console.log(`Congratulations, you have won the match!`);
    } else {
      console.log('The Computer has won the match! Better luck next time');
    }
  }

  static joinOr(availableSpaces, delimiter = ",", ending = "or") {
    if (availableSpaces.length === 1) return `${availableSpaces[0]}`;
    if (availableSpaces.length === 2) return `${availableSpaces[0]} ${ending} ${availableSpaces[1]}`;
    let firstToSecondToLast = availableSpaces.slice(0, availableSpaces.length - 1);
    let joinFirst = firstToSecondToLast.join(`${delimiter} `);
    return `${joinFirst} ${ending} ${availableSpaces[availableSpaces.length - 1]}`;
  }

  humanMoves() {
    let choice;
    while (true) {
      let availableSpaces = this.board.availableSpaces();
      choice = readline.question(`Choose a square from these available: ${TTTGame.joinOr(availableSpaces)} \n`);
      if (availableSpaces.includes(choice.trim())) break;
      console.log("Please pick a choice from the available spaces...");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  atUrgentSquare(row, player) {
    if (this.board.countMarkersFor(player, row) === 2) {
      let index = row.findIndex(key => this.board.isUnusedKey(key));
      if (index >= 0) return row[index];
    }
    return null;
  }

  computerUrgentMove(player) {
    let rowsOfInterest = TTTGame.POSSIBLE_WINNING_MOVES.map(row => this.atUrgentSquare(row, player));

    let immediateMove = rowsOfInterest.filter(key => !!key);

    return immediateMove;
  }

  computerMoves() {
    let availableSpaces = this.board.availableSpaces();

    let offensiveMove = this.computerUrgentMove(this.computer);

    let defensiveMove = this.computerUrgentMove(this.human);

    let choose5 = availableSpaces.includes('5') ? '5' : null;

    let randomIndex = Math.floor(Math.random() * availableSpaces.length);

    let choice = offensiveMove[0] || defensiveMove[0] || choose5 || availableSpaces[randomIndex];

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isMatchWinner(player) {
    return player.score === TTTGame.MATCH_GOAL;
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_MOVES.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

}

let game = new TTTGame();
game.playMatch();

