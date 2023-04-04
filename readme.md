### Exercise 🏋️‍♀️

We would like you to build a 2 player card game, the game is played as follows:

- We start with the deck of 52 cards, each uniquely numbered from 1 to 52
- The deck is shuffled
- We deal out those cards between the 2 players. Each player gets half the deck.
- On each turn of the game, both players turn over their top most card and they compare the value of those cards.
- The player with the higher valued card "wins" the round and gets a point. The two cards being compared are discarded.
- Rounds are played until all the cards are discarded.
- At the end of the game the player who has the most points wins.

Your task is to simulate this game in a language of your choice. The outputs of your simulation should be as follows:

- When each round is played you should print each players card value along with an indication which player won that round.
- When all rounds are played you should print each players final score along with an indication of which player won overall.

### Description

The game simulation is implemented in NodeJS with TypeScript.

To run the simulation first install dependencies, by running

`npm install`

Then execute

`npm run dev`

For production, first execute the following command to build TypeScript project

`npm run build`

Then run

`npm run start:prod`

### Testing

Testing is implemented using Jest testing framework.

To run tests execute

`npm run test`
