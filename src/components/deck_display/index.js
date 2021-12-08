import {useState} from 'react'
function DeckDisplay(props) {
    const [currentDeck, setCurrentDeck] = useState([]);
    const [numOfPlayers, setNumOfPlayers] = useState(1);

    const shuffleDeck = () => {
        console.log('shuffle deck is clicked')
        let deckToShuffle = props.deck.map(card => card);
        let deckLength = props.deck.length;
        let randomPosition
        while (deckLength) {
            randomPosition = Math.floor(Math.random() * deckLength--);

            [deckToShuffle[deckLength], deckToShuffle[randomPosition]] = [deckToShuffle[randomPosition], deckToShuffle[deckLength]];
    }
    setCurrentDeck(deckToShuffle);
    }

    return (
      <div style={{maxWidth: '1200px'}}>
        <h1>List of cards</h1>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {props.deck.map(card => (
            <div key={card.id} style={{border: '1px solid black', textAlign: 'center', margin: '4px 8px'}}>
                <p>{card.suit}</p>
                <p>{card.cardValue}</p>
            </div>
        ))}
        </div>
        <h1>Shuffled deck</h1>
        <button onClick={shuffleDeck}>Click to shuffle deck</button>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {currentDeck && (
                currentDeck.map(card => (
                    <div key={`${card.id}currentDeck`} style={{border: '1px solid black', textAlign: 'center', margin: '4px 8px'}}>
                        <p>{card.suit}</p>
                        <p>{card.cardValue}</p>
                    </div>
                ))
            )}

        </div>
        <h1>Number of Players {numOfPlayers}</h1>
        <input type="number" />
      </div>
    );
  }
  
  export default DeckDisplay;