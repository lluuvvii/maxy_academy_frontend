import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line
      setResult(eval(display));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1 className="title">Simple Calculator</h1>
      <div className="display">
        <p>{display || '0'}{result}</p>
      </div>
      <div className="buttons">
        {/* Angka dan operator */}
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => {
          handleButtonClick('=');
          calculate();
        }}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
