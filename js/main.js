var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
if (cardsInPlay[0] === "queen") {
	console.log("User flipped queen");
} else if (cardsInPlay[0] === "king") {
	console.log("User flipped king");
}
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
if (cardsInPlay[1] === "king") {
	console.log("User flipped king");
} else if (cardsInPlay[1] === "queen") {
	console.log("User flipped queen");
}
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!")
} else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.")
}
