import React, { useState } from 'react';
// import './App.css'; // Ensure the styles are shared

function ThreeInputCard({ onClose }) {
  const [inputs, setInputs] = useState(['', '', '']); // State for 3 inputs

  const handleInputChange = (index, value) => {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index] = value;
      return updatedInputs;
    });
  };

  return (
    <div className="three_input_card">
      <h4>Three Input Card</h4>
      {inputs.map((value, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Input ${index + 1}`}
          value={value}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className="input_field"
        />
      ))}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ThreeInputCard;
