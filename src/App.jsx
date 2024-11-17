import React, { useState } from 'react';
import './App.css';
import ThreeInputCard from './component/threeinputfield'; // Import the reusable component

function App() {
  const [cards, setCards] = useState([]); // State to store the cards
  const [inputValue, setInputValue] = useState(''); // State to store input value
  const [selectedCard, setSelectedCard] = useState(null); // State for the selected card

  const addCard = () => {
    if (inputValue.trim() === '') return; // Prevent empty cards
    const newCard = { id: cards.length + 1, name: inputValue };
    setCards([...cards, newCard]); // Add the new card to the state
    setInputValue(''); // Clear the input field
  };

  const openCard = (card) => {
    setSelectedCard(card); // Set the selected card
  };

  const closeCard = () => {
    setSelectedCard(null); // Clear the selected card
  };

  return (
    <>
      <div className="main_container">
        <div className="navbar">
          <input
            type="text"
            placeholder="Enter a brand name..."
            className="input_field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update input value
          />
          <button onClick={addCard}>Add Card</button>
        </div>
        <div className="cards">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => openCard(card)} // Open the card on click
            >
              <div className="card_logo"></div>
              <p>{card.name}</p>
            </div>
          ))}
        </div>

        {/* Render the ThreeInputCard component if a card is selected */}
        {selectedCard && <ThreeInputCard onClose={closeCard} />}
      </div>
    </>
  );
}

export default App;
