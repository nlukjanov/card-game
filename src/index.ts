export interface Player {
  score: number;
  cards: number[];
}

export function shuffleDeck(deck: number[]): number[] {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function compareCards(
  player1Card: number,
  player2Card: number,
): 'player1' | 'player2' {
  return player1Card > player2Card ? 'player1' : 'player2';
}

function playGame() {
  const deck = Array.from({ length: 52 }, (_, i) => i + 1);
  const shuffledDeck = shuffleDeck(deck);

  const player1: Player = {
    score: 0,
    cards: [],
  };

  const player2: Player = {
    score: 0,
    cards: [],
  };

  for (let i = 0; i < 52; i++) {
    if (i % 2 === 0) {
      player1.cards.push(shuffledDeck[i]);
    } else {
      player2.cards.push(shuffledDeck[i]);
    }
  }

  while (player1.cards.length > 0 && player2.cards.length > 0) {
    const round = 1;
    const player1Card = player1.cards.pop()!;
    const player2Card = player2.cards.pop()!;

    const winner = compareCards(player1Card, player2Card);

    console.log(`\nRound ${round}:`);
    console.log(`Player 1: ${player1Card} - Player 2: ${player2Card}`);

    if (winner === 'player1') {
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
