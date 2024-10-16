import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleNumberClick = (number) => {
    setDisplay(display === '0' ? number : display + number);
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPreviousValue(parseFloat(display));
    setDisplay('0');
  };

  const handleEqualsClick = () => {
    const currentValue = parseFloat(display);
    let result = 0;
    switch (operator) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '*':
        result = previousValue * currentValue;
        break;
      case '/':
        if (currentValue === 0) {
          result = 'Error';
        } else {
          result = previousValue / currentValue;
        }
        break;
      default:
        result = currentValue;
    }
    setDisplay(result.toString());
    setOperator(null);
    setPreviousValue(null);
  };

  const handleClearClick = () => {
    setDisplay('0');
    setOperator(null);
    setPreviousValue(null);
  };

  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handlePlusMinusClick = () => {
    setDisplay((parseFloat(display) * -1).toString());
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="function-button" onClick={handleClearClick}>C</button>
        <button className="function-button" onClick={() => handleOperatorClick('/')}>/</button>
        <button className="function-button" onClick={() => handleOperatorClick('*')}>*</button>
        <button className="function-button" onClick={handlePlusMinusClick}>+/-</button>
        <button className="number-button" onClick={() => handleNumberClick('7')}>7</button>
        <button className="number-button" onClick={() => handleNumberClick('8')}>8</button>
        <button className="number-button" onClick={() => handleNumberClick('9')}>9</button>
        <button className="function-button" onClick={() => handleOperatorClick('-')}>-</button>
        <button className="number-button" onClick={() => handleNumberClick('4')}>4</button>
        <button className="number-button" onClick={() => handleNumberClick('5')}>5</button>
        <button className="number-button" onClick={() => handleNumberClick('6')}>6</button>
        <button className="function-button" onClick={() => handleOperatorClick('+')}>+</button>
        <button className="number-button" onClick={() => handleNumberClick('1')}>1</button>
        <button className="number-button" onClick={() => handleNumberClick('2')}>2</button>
        <button className="number-button" onClick={() => handleNumberClick('3')}>3</button>
        <button className="equals-button" onClick={handleEqualsClick}>=</button>
        <button className="number-button" onClick={() => handleNumberClick('0')}>0</button>
        <button className="number-button" onClick={handleDecimalClick}>.</button>
      </div>
    </div>
  );
}

export default App;