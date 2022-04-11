/***
Steps to Implement for Filtered version of Blackjack

1. Initialize deck (shuffle)
2. Deal cards to player and dealer
3. Player first to hit or stay
4. If stay, dealer turn.
5. If bust, game over.
6. Dealer turn to hit or stay. 
7. If < 17, dealer hits. 
8. If bust, game over.
9. If stay, compare cards and declare winner. 


***/
let rlSync = require('readline-sync');

const cardDeck = [['A','S'], ['K','S'], ['Q', 'S'], ['J', 'S'], ['10', 'S'], ['9', 'S'], ['8','S'], ['7','S'], ['6', 'S'], ['5', 'S'], ['4', 'S'], ['3', 'S'], ['2', 'S'],
			['A','H'], ['K','H'], ['Q', 'H'], ['J', 'H'], ['10', 'H'], ['9', 'H'], ['8','H'], ['7','H'], ['6', 'H'], ['5', 'H'], ['4', 'H'], ['3', 'H'], ['2', 'H'],
			['A','D'], ['K','D'], ['Q', 'D'], ['J', 'D'], ['10', 'D'], ['9', 'D'], ['8','D'], ['7','D'], ['6', 'D'], ['5', 'D'], ['4', 'D'], ['3', 'D'], ['2', 'D'],
			['A','C'], ['K','C'], ['Q', 'C'], ['J', 'C'], ['10', 'C'], ['9', 'C'], ['8','C'], ['7','C'], ['6', 'C'], ['5', 'C'], ['4', 'C'], ['3', 'C'], ['2', 'C']];

const cardValues = {'K':10, 'Q':10, 'J':10} //if it's not in this dict Object, take the literal Integer value

let playerHand = [];
let dealerHand = [];
let deck = [];

while (true) {

	let items = initializeDeck();
	playerHand = items[0];
	dealerHand = items[1];
	deck = items[2];
	let busted = false;
	show(playerHand);
	console.log(`Player score: ${count(playerHand)}`);
	let action = rlSync.question("Would you like to hit/stay? Enter h/s: ");

	//Player first
	while (action === 'h') {
		let dealt = dealCards(playerHand, deck);
		playerHand = dealt[0];
		deck = dealt[1];
		if (isBust(playerHand)) { //abstract this later TODO
			show(playerHand);
			busted = true;
			console.log("Player busts. Dealer wins.");
			break;
		}
		show(playerHand);
		console.log(`Player score: ${count(playerHand)}`);
		action = rlSync.question("Hit or stay? Enter h/s: ");
	}

	while (count(dealerHand) < 17) {
		let dealt = dealCards(dealerHand, deck);
		dealerHand = dealt[0];
		deck = dealt[1];
		if (isBust(dealerHand)) {
			show(dealerHand);
			busted = true;
			console.log("Dealer busts. Player wins.");
			break;
		}
	}

	if (busted) {
		return;
	}

	compareCards(playerHand, dealerHand);
	return;
}

function show(hand) {
	console.log(hand);
}

function initializeDeck() {
	let playerHand = [];
	let dealerHand = [];

	let shuffledDeck = shuffle(cardDeck);

	for (let i = 0; i < 2; i++) {
		playerHand.push(shuffledDeck.shift());
		dealerHand.push(shuffledDeck.shift());
	}

	return [playerHand, dealerHand, shuffledDeck];

}

function count(hand) {
	// each hand is an array of cards with two elements and we only care about the first one (the card rank)
	// watch out for the A because it can be 1 or 11, depending on the current hand's score

	let score = 0;

	let aceHolder = 0; //a variable to store the number of Aces in the hand (can have more than 1 but no more than 4)

	hand.forEach(card => {
		if (card[0] === 'A') {
			aceHolder++;
		} else {
			if (Object.keys(cardValues).includes(card[0])) {
				score += 10;
			} else {
				//it is a literal Integer
				score += Number(card[0]);
			}
		}
	});

	while (aceHolder > 0) { //first draft here
		if (score <= 10) {
			score += 11;
		} else {
			score++;
		}
		aceHolder--;
	}	

	return score;

}

function dealCards(hand, deck) { //accepts a shuffled deck and a hand
	hand.push(deck.shift());
	return [hand, deck];
}

function compareCards(playerHand, dealerHand) {
	let playerScore = count(playerHand);
	let dealerScore = count(dealerHand);
	//pretty sure these are sub 21 scores
	if (playerScore > dealerScore) {
		if (!isBust(playerHand)) {
			console.log(`Player wins with a score of ${playerScore}. Dealer scores ${dealerScore}`);
		}
	} else {
		if (!isBust(dealerHand)) {
			console.log(`Dealer wins with a score of ${dealerScore}. Player scores ${playerScore}`);
		}
	}
}

function isBust(hand) {
	let score = count(hand);
	return score > 21;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}













