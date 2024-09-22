import React from 'react';
import './App.css';
import WordCounterView from './views/WordCounterView.js';
import useWordController from './controllers/WordController.js';

function App() {
  const { text, wordCount, handleTextChange } = useWordController();

  return (
    <div className="App">
      <WordCounterView
        text={text}
        wordCount={wordCount}
        onTextChange={handleTextChange}
      />
    </div>
  );
}

export default App;
