global.console = {
  ...console,
  log: jest.fn(),
};

import { Player, compareCards, shuffleDeck } from '.';

describe('Player', () => {
  test('should correctly add cards and points', () => {
    const player: Player = { score: 0, cards: [] };
    const card = 42;

    expect(player.cards.length).toBe(0);
    expect(player.score).toBe(0);

    player.cards.push(card);
    player.score++;

    expect(player.cards.length).toBe(1);
    expect(player.cards[0]).toBe(42);
    expect(player.score).toBe(1);
  });
});

describe('shuffleDeck', () => {
  test('should shuffle the deck without changing its size or content', () => {
    const originalDeck = Array.from({ length: 52 }, (_, i) => i + 1);
    const shuffledDeck = shuffleDeck([...originalDeck]);

    expect(shuffledDeck.length).toBe(52);

    const sortedShuffledDeck = shuffledDeck.sort((a, b) => a - b);

    expect(sortedShuffledDeck).toEqual(originalDeck);
  });
});

describe('compareCards', () => {
  test('should return the winner of the card comparison', () => {
    const player1Card = 10;
    const player2Card = 5;

    const winner = compareCards(player1Card, player2Card);

    expect(winner).toBe('player1');
  });

  test('should return the winner of the card comparison when player 2 wins', () => {
    const player1Card = 3;
    const player2Card = 9;

    const winner = compareCards(player1Card, player2Card);

    expect(winner).toBe('player2');
  });

  test('should return the winner of the card comparison when the cards have the same value', () => {
    const player1Card = 7;
    const player2Card = 7;

    const winner = compareCards(player1Card, player2Card);

    expect(winner).toBe('player2');
  });
});
