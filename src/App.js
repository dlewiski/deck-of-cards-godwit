import {useState} from 'react'
import { deckOfCards } from "./Deck";
import DeckDisplay from "./components/deck_display";
function App() {
  const [deck, setDeck] = useState(deckOfCards())

  console.log(deck)
  return (
    <div className="App">
      <DeckDisplay deck={deck} />
    </div>
  );
}

export default App;
