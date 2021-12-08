export const deckOfCards = () => {
    const cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    let deck = [];
    let id = 1;

    suits.forEach(suit => {
      cardValues.forEach(cardValue =>{
        deck.push({suit: suit, cardValue: cardValue, id});
        id++
      })
    })
      //   for (let cardValue in cardValues) {
      //     console.log(suit)
      //     deck.push({suit: suit, cardValue: cardValue, id});
      //     id++
      //   };
      // };
      
    return deck;
};