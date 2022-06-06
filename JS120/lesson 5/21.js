const readline = require('readline-sync');

class Card {
  constructor(suit, rank) {
  	this.suit = suit;
  	this.rank = rank;
  }

  getSuit() {
  	return this.suit;
  }

  getRank() {
  	return this.rank;
  }

  toString() {
  	return `${this.suit} ${this.rank}`;
  }
}

class Deck {
  static RANKS = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  static SUITS = ['HEARTS','SPADES','DIAMONDS','CLUBS'];

  constructor() {
  	this.deck = [];
  	for (let rank of Deck.RANKS) {
  	  for (let suit of Deck.SUITS) {
  	  	let card = new Card(suit, rank);
  	  	this.deck.push(card);
  	  }
  	}
  }
}

class Participant {

  constructor(name) {
  	this.hand = [];
  	this.name = name;
  }

  score() {
  	let aceCounter = 0;
  	let score = 0;
  	for (let card of this.hand) {
  	  if (card.getRank() === 'A') {
  	  	aceCounter++;
  	  } else if (['J','Q','K'].includes(card.getRank())) {
  	  	score += 10;
  	  } else {
  	  	score += Number(card.getRank());
  	  }
  	}
  	while (aceCounter > 0) {
  	  if (score <= 10 && aceCounter <= 1) {
  	  	score += 11;
  	  } else {
  	  	score += 1;
  	  }
  	  aceCounter--;
  	}
  	return score;
  }

  isBusted() {
  	return this.score() > TwentyOneGame.BUST_THRESHOLD;
  }

  reveal() {
  	return this.hand.join(", ");
  }

}

class Player extends Participant {
  constructor(name) { 
  	super(name);
  	this.money = 5;
  }

  getMoney() {
  	return this.money;
  }

  isPoor() {
  	return this.money === 0;
  }

  isRich() {
  	return this.money === 10;
  }

}

class Dealer extends Participant {
  constructor() {
  	super('Dealer');
  }

  hide() {
  	return `HIDDEN, ${this.hand.slice(1).join(",")}`;
  }
}

class TwentyOneGame {
  
  static BUST_THRESHOLD = 21;
  static DEALER_HIT_THRESHOLD = 17;

  constructor() {
  	this.deck = new Deck();
  	this.dealer = new Dealer();
  	this.player = new Player('PlayerOne');
  	this.winner = null;
  	this.loser = null;
  }

  start() {
  	this.displayWelcomeMessage();

  	this.playOneGame();
  	
  	while (true) {
  	  if (this.player.isRich()) {
  	  	console.log(`Sorry, you are too rich to play, you have ${this.player.getMoney()}`);
  	  	break;
  	  } 
  	  if (this.player.isPoor()) {
  	  	console.log(`Sorry, you have no money left to play with.`);
  	  	break;
  	  }
  	  let response = readline.question("Would you like to play again? Enter yes or no: ");
  	  while (!['yes', 'no'].includes(response.trim())) {
  	  	response = readline.question(`Please enter "yes" or "no": `);
  	  }
  	  if (response === 'yes') {
  	    this.playAgain();
  	  } else {
  	  	break;
  	  }
	}

  	this.displayGoodbyeMessage();
  }

  playOneGame() {
  	this.reset();
  	this.dealCards();
  	this.playerTurn();
  	this.dealerTurn();
  	this.displayResult();
  }

  reset() {
  	this.deck = new Deck();
  	this.player.hand = [];
  	this.dealer.hand = [];
  	this.winner = null;
  	this.loser = null;
  }

  playAgain() {
  	this.playOneGame();
  }

  dealCards() {
  	this.shuffleCards();

  	let deck = this.deck.deck;

  	for (let count = 0; count < 2; count++) { //only factored for 2 players rn
  	  this.addCards(this.player);
  	  this.addCards(this.dealer);
  	}

  }

  getWinner() {
  	return this.winner;
  }

  getLoser() {
  	return this.loser;
  }

  shuffleCards() {
  	let array = this.deck.deck;
  	for (let index = array.length - 1; index > 0; index--) {
  	  let otherIndex = Math.floor(Math.random() * (index + 1));
  	  [array[index], array[otherIndex]] = [array[otherIndex], array[index]]
  	}
  }

  addCards(player) {
  	let deck = this.deck.deck;
  	let card = deck.shift();
  	player.hand.push(card);
  } 

  playerTurn() {

  	while (true) {
  	  console.log(`Dealer's hand: ${this.dealer.hide()}`);
  	  console.log(`Your hand: ${this.player.reveal()} and points total: ${this.player.score()}`);
  	  let response = readline.question('Would you like to hit or stay? ').trim();
  	  while (!['hit','stay'].includes(response)) {
  	    response = readline.question('Please enter "hit" or "stay": ');
  	  }
  	  if (response === 'hit') {
  	  	this.addCards(this.player);
  	  	if (this.player.isBusted()) {
  	  	  console.log(`You busted! Your score: ${this.player.score()}`);
  	  	  return;
  	  	}
  	  	continue;
  	  } else if (response === 'stay');
  	    console.log('You chose to stay');
  	    return;
  	}
  }

  dealerTurn() {
  	if (this.player.isBusted()) return;

  	console.log(`Dealer's hand: ${this.dealer.reveal()}`);
  	console.log(`Dealer's point total: ${this.dealer.score()}`);

  	while (this.dealer.score() <= TwentyOneGame.DEALER_HIT_THRESHOLD) {
  	  this.addCards(this.dealer);
  	  console.log(`Dealer's hand: ${this.dealer.reveal()}`);
  	  console.log(`Dealer's point total: ${this.dealer.score()}`);
  	}

  }

  compareCards() {
  	let playerScore = this.player.score();
  	let dealerScore = this.dealer.score();
  	if ((!this.player.isBusted() && playerScore >= dealerScore) || (this.dealer.isBusted())) {
  	  this.winner = this.player;
  	  this.player.money += 1;
  	  this.loser = this.dealer;
  	} else if ((!this.dealer.isBusted() && dealerScore > playerScore) || (this.player.isBusted())){
  	  this.winner = this.dealer;
  	  this.loser = this.player;
  	  this.player.money -= 1;
  	} 
  }

  displayResult() {
  	this.compareCards();
  	let winner = this.getWinner();
  	let loser = this.getLoser();
  	console.log(`The winner is ${winner.name}, with a score of: ${winner.score()}`);
  }

  displayWelcomeMessage() {
  	console.log(`Welcome to the Game of 21!`);
  }

  displayGoodbyeMessage() {
  	console.log(`Thank you for playing Twenty One! Goodbye ${this.player.name}`)
  }

}

let game = new TwentyOneGame();
game.start();


