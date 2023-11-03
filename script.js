let player = {
  name: "Chetan",
  chips: 200,
};
let cards = [];
let sum = 0;
let message = "";
let hasBlackjack = false;
let alive = false;
let paraEl = document.getElementById("paragraph");
let cardEl = document.getElementById("Card");
let sumEl = document.getElementById("sum");
let playerEl = document.getElementById("info");
playerEl.textContent = player.name + " :  $" + player.chips;

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function start() {
  alive = true;

  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Card:  ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + "  ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got BlackJack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game";
    alive = false;
  }
  paraEl.textContent = message;
}
function newCard() {
  if (alive === true && hasBlackjack === false) {
    let card = getRandomNumber();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
