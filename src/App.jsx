import React, { useState } from 'react';
import './App.css';

const generateRandomColor = () => {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex.padStart(6, '0')}`;
};

const generatePalette = (count = 5) => {
  return Array.from({ length: count }, generateRandomColor);
};

const App = () => {
  const [colors, setColors] = useState(generatePalette());

  const handleGenerate = () => {
    setColors(generatePalette());
  };

  const handleCopy = (color) => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="app">
      <h1>🎨 Color Palette Generator</h1>
      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => handleCopy(color)}
          >
            <span className="color-code">{color}</span>
          </div>
        ))}
      </div>
      <button className="generate-button" onClick={handleGenerate}>
        Generate New Palette
      </button>
    </div>
  );
};

export default App;
