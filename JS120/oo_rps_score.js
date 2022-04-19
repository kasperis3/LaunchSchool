const readline = require('readline-sync');

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`Computer chose: ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      this.human.score += 1;
      console.log('You win this round!');
    } else if ((computerMove === 'rock' && humanMove === 'scissors') ||
               (computerMove === 'paper' && humanMove === 'rock') ||
               (computerMove === 'scissors' && humanMove === 'paper')) {
      this.computer.score += 1;
      console.log('Computer wins this round!');
    } else {
      console.log("It's a tie!");
    }
    this.human.moveHistory.push(humanMove);
    this.computer.moveHistory.push(computerMove);
    console.log(`Current scores: computer has ${this.computer.score} wins and you have ${this.human.score} wins.`);
  },

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  playAgain() {
    console.log('Would you like to play again? y/n');
    let response = readline.question();
    return response.toLowerCase()[0] === 'y';
  },

  displayGameWinner() {
    if (this.human.score === 5) {
      console.log('You won first to 5!');
    } else {
      console.log('Computer wins first to 5!');
    }
    console.log(`You made these moves: ${this.human.moveHistory.join(', ')}.`);
    console.log(`Computer made these moves: ${this.computer.moveHistory.join(', ')}.`);
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.score = 0;
      this.computer.score = 0;
      this.human.moveHistory = [];
      this.computer.moveHistory = [];
      while (this.human.score < 5 && this.computer.score < 5) {
        this.human.choose();
        this.computer.choose();
        this.displayWinner();
      }
      this.displayGameWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

function createPlayer() {
  return {
    move: null,
    score: 0,
    moveHistory: [],
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {

    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {

    choose() {
      let choice;

      while (true) {
        console.log('Choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;

    },
  };
  return Object.assign(humanObject, playerObject);
}

RPSGame.play();

