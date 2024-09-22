import { useState } from 'react';
import { countWords } from '../models/wordCounter';

const useWordController = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    setWordCount(countWords(inputText));
  };

  return {
    text,
    wordCount,
    handleTextChange,
  };
};

export default useWordController;
