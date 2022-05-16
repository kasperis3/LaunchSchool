const readline = require('readline-sync');

let Square = {
  UNUSED_SQUARE: ' ',
  COMPUTER_MARKER: 'O',
  HUMAN_MARKER: 'X',

  init(marker = Square.UNUSED_SQUARE) {
  	this.marker = marker;
  	return this;
  },

  toString() {
  	return this.marker;
  },

  setMarker(marker) {
  	this.marker = marker;
  },

  isUnused() {
  	return Square.UNUSED_SQUARE === this.marker;
  },

  getMarker() {
  	return this.marker;
  },

};

let Board = {
  init() {
    this.squares = {};
    for (let counter = 1; counter < 10; counter++) {
      this.squares[counter] = Object.create(Square).init();
    }
    return this;
  },

  availableSpaces() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  },

  isFull() {
    return this.availableSpaces().length === 0;
  },

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  },

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].toString() === player.getMarker();
    });

    return markers.length;
  },

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
  },
}

let Player = {
  init(marker) {
  	this.marker = marker;
  	return this;
  },

  getMarker() {
  	return this.marker;
  }
}

let Human = {
  init() {
  	let human = Object.create(Player).init(Square.HUMAN_MARKER);
  	return human;
  }
}

let Computer = {
  init() {
  	let computer = Object.create(Player).init(Square.COMPUTER_MARKER);
  	return computer;
  }
}

let TTTGame = {
  POSSIBLE_WINNING_MOVES: [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ],

  init() {
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
    this.board = Object.create(Board).init();
    return this;
  },

  play() {
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
  },

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  },

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You win! Congratulations");
    } else if (this.isWinner(this.computer)) {
      console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    }
  },

  humanMoves() {
    let choice;
    while (true) {
      let availableSpaces = this.board.availableSpaces();
      choice = readline.question(`Choose a square from these available: ${availableSpaces.join(", ")} \n`);
      if (availableSpaces.includes(choice.trim())) break;
      console.log("Please pick a choice from the available spaces...");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  },

  computerMoves() {
    let availableSpaces = this.board.availableSpaces();
    let randomIndex = Math.floor(Math.random() * availableSpaces.length);
    let choice = availableSpaces[randomIndex];
    this.board.markSquareAt(choice, this.computer.getMarker());
  },

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  },

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  },

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_MOVES.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  },

}

let game = Object.create(TTTGame).init();
console.log(game);
game.play();
