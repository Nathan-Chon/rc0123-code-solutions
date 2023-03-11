console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = ['nathan', 'justin', 'josh', 'steph'];
var playerHand = [{}];

var playerList = [];
function playerCreation(playerName, playerHand) {

  for (var i = 0; i < playerName.length; i++) {
    for (var k = 0; k < playerHand.length; k++) {
      var player = {
        name: players[i],
        hand: playerHand[k]
      };
      playerList.push(player);
    }
  }
  return playerList;
}

playerCreation(players, playerHand);

var cardNumber = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
var cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

var cardDeck = [];
function cardDeckBuild(cardNumber, cardSuit) {
  for (var i = 0; i < cardNumber.length; i++) {
    for (var j = 0; j < cardSuit.length; j++) {
      var card = {
        rank: cardNumber[i],
        suit: cardSuit[j],
        value: cardValue[i]
      };
      cardDeck.push(card);
    }
  }
  return cardDeck;
}

cardDeckBuild(cardNumber, cardSuit);

function shuffle(cardDeck) {
  for (var i = 0; i < cardDeck.length; i++) {
    var last = cardDeck.length - 1;
    if (last > 0) {
      var random = getRandom(0, last);
      var temp = cardDeck[last];
      cardDeck[last] = cardDeck[random];
      cardDeck[random] = temp;
      last -= 1;
    }
  }
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

shuffle(cardDeck);
console.log(cardDeck);

playerList[0].hand = cardDeck.splice(0, 2);
playerList[1].hand = cardDeck.splice(0, 2);
playerList[2].hand = cardDeck.splice(0, 2);
playerList[3].hand = cardDeck.splice(0, 2);

console.log(playerList);

function winner() {
  var playerOne = playerList[0].hand[0].value + playerList[0].hand[1].value;
  var playerTwo = playerList[1].hand[0].value + playerList[1].hand[1].value;
  var playerThree = playerList[2].hand[0].value + playerList[2].hand[1].value;
  var playerFour = playerList[3].hand[0].value + playerList[3].hand[1].value;
  var compare = [playerOne, playerTwo, playerThree, playerFour];
  var largestNumber = Math.max(compare[0], compare[1], compare[2], compare[3]);
  var theWinner = '';
  if (largestNumber === compare[0]) {
    theWinner = 'Nathan is the winner';
  } else if (largestNumber === compare[1]) {
    theWinner = 'Justin is the winner';
  } else if (largestNumber === compare[2]) {
    theWinner = 'Josh is the winner';
  } else if (largestNumber === compare[3]) {
    theWinner = 'Steph is the winner';
  }
  console.log('playerOneHand: ', playerOne);
  console.log('playerTwoHand:', playerTwo);
  console.log('playerThreeHand:', playerThree);
  console.log('playerFourHand:', playerFour);
  console.log(theWinner);
}

winner();
