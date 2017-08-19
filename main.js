
var cards = [
{
 rank: "queen",
 suit: "hearts",
 cardImage: "images/queen-of-hearts.png"
},
{
 rank: "queen",
 suit: "diamons",
 cardImage: "images/queen-of-hearts.png"
}

];
var cardsInPlay = [];

var cardElement = document.createElement('img');

cardElement.setAttribute('src', 'images/back.png');

cardElement.setAttribute('data-id', i);

var checkForMatch = function () {
	
}

var flipCard = function () {

var cardId = this.getAttribute('data-id')

this.setAttribute('src', cards[cardId].cardImage);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Try again!");
	}
	
	checkForMatch();
}

console.log("User flipped" + cards[cardsId]);
cardsInPlay.push(cards[cardId]);

	
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {

	var cardElement = document.createElement('img');
	
	cardElement.setAttribute('src', 'images/back.png');

	cardElement.setAttribute('data-id', i);	
	
	cardElement.addEventListener('click', cardElement);
	
	document.getElementById('game-board').appendChild(cardElement);
	
	}
	
}

gameBoard();

