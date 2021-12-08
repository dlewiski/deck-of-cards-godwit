import {useState, useEffect} from 'react'
import { deckOfCards } from "./Deck";
import DeckDisplay from "./components/deck_display";
function App() {
  const [deck, setDeck] = useState([])
  
  useEffect(() => {
    setDeck(deckOfCards());
  }, [])

  return (
    <div className="App">
      <DeckDisplay deck={deck} />
    </div>
  );
}

export default App;
