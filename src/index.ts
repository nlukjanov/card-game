interface Player {
  score: number;
  cards: number[];
}

function shuffleDeck(deck: number[]): number[] {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function playGame() {
  const deck = Array.from({ length: 52 }, (_, i) => i + 1);
  const shuffledDeck = shuffleDeck(deck);

  const middleIndex = Math.ceil(shuffledDeck.length / 2);
  const player1Stack = shuffledDeck.slice(0, middleIndex);
  const player2Stack = shuffledDeck.slice(middleIndex);

  const player1: Player = {
    score: 0,
    cards: player1Stack,
  };

  const player2: Player = {
    score: 0,
    cards: player2Stack,
  };

  while (player1Stack.length > 0 && player2Stack.length > 0) {
    let round = 1;
    const player1Card = player1Stack.pop()!;
    const player2Card = player2Stack.pop()!;

    console.log(`\nRound ${round}:`);
    console.log(`Player 1: ${player1Card} - Player 2: ${player2Card}`);

    if (player1Card > player2Card) {
      console.log('Player 1 wins this round!');
      player1.score += 1;
    } else {
      console.log('Player 2 wins this round!');
      player2.score += 1;
    }
  }

  console.log(`\nFinal Score:`);
  console.log(`Player 1: ${player1.score} - Player 2: ${player2.score}`);

  if (player1.score > player2.score) {
    console.log('Player 1 wins the game!');
  } else if (player2.score > player1.score) {
    console.log('Player 2 wins the game!');
  } else {
    console.log('It is a draw!');
  }
}

playGame();
