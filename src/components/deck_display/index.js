function DeckDisplay(props) {
    return (
      <div>
        <h1>List of cards</h1>
        <div style={{display: 'flex'}}>
        {props.deck.map(card => (
            <div key={card.id} style={{border: '1px solid black', textAlign: 'center', margin: '4px 8px'}}>
                <p>{card.suit}</p>
                <p>{card.cardValue}</p>
            </div>
        ))}
        </div>
      </div>
    );
  }
  
  export default DeckDisplay;