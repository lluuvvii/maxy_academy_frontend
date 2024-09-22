import React, { useState } from 'react';
import './CharacterCounter.css';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Character Counter</h1>
      <div className="card">
        <textarea
          className="text-area"
          value={text}
          onChange={handleTextChange}
          placeholder="Type your text here..."
          rows="10"
        />
        <p className="char-count">Character Count: {text.length}</p>
      </div>
    </div>
  );
};

export default CharacterCounter;
