// create card deck
const deck = Array.from({ length: 52 }, (_, i) => i + 1);
// shuffle deck

function shuffleDeck(deck: number[]): number[] {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const shuffledDeck = shuffleDeck(deck);

const middleIndex = Math.ceil(shuffledDeck.length / 2);

const player1Stack = shuffledDeck.slice(0, middleIndex);
const player2Stack = shuffledDeck.slice(middleIndex);

function playGame() {
  let player1Score = 0;
  let player2Score = 0;
  while (player1Stack.length > 0 && player2Stack.length > 0) {
    let round = 1;
    const player1Card = player1Stack.pop()!;
    const player2Card = player2Stack.pop()!;

    console.log(`Round ${round}:`);
    console.log(`Player 1: ${player1Card} - Player 2: ${player2Card}`);

    if (player1Card > player2Card) {
      console.log('Player 1 wins this round!');
      player1Score += 1;
    } else {
      console.log('Player 2 wins this round!');
      player2Score += 1;
    }
  }

  console.log(`\nFinal Score:`);
  console.log(`Player 1: ${player1Score} - Player 2: ${player2Score}`);

  if (player1Score > player2Score) {
    console.log('Player 1 wins the game!');
  } else {
    console.log('Player 2 wins the game!');
  }
}

playGame();
