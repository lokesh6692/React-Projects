import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

function App() {
  const [exp, setExp] = useState(""); // Store the expression in state

  const handleInput = (e) => {
      if(e.target.value==='X')
      {
          setExp(exp.slice(0,-1));
      }
      else
    setExp(exp + e.target.value); // Append the value of the clicked button
  };

  const handleCalculation = () => {
    try {
      setExp(eval(exp).toString()); // Evaluate the expression
    } catch (error) {
      setExp("Error"); // If there's an error, show "Error"
    }
  };

  const handleClear = () => {
    setExp(""); // Clear the expression
  };

  return (
    <div className="calculator">
      <div className="input-container">
        <input
          type="text"
          value={exp}
          readOnly
          placeholder="Enter expression"
        />
      </div>

      <div className="buttons-container">
        <button onClick={handleInput} value="1">1</button>
        <button onClick={handleInput} value="2">2</button>
        <button onClick={handleInput} value="3">3</button>
        <button onClick={handleInput} value="4">4</button>
        <button onClick={handleInput} value="5">5</button>
        <button onClick={handleInput} value="6">6</button>
        <button onClick={handleInput} value="7">7</button>
        <button onClick={handleInput} value="8">8</button>
        <button onClick={handleInput} value="9">9</button>
        <button onClick={handleInput} value="0">0</button>
        <button onClick={handleInput} value="+">+</button>
        <button onClick={handleInput} value="-">-</button>
        <button onClick={handleInput} value="*">*</button>
        <button onClick={handleInput} value="/">/</button>
        <button onClick={handleInput} value=".">.</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculation}>=</button>
          <button onClick={handleInput} value="X">X</button>
         
      </div>
    </div>
  );
}

export default App;
