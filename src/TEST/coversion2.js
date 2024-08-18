import React, { useState } from 'react';

const NumberInput1 = () => {
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleChange = (e) => {
    let value = e.target.value.replace(/\s+/g, ''); // Remove all spaces
    value = value.replace(/\D/g, ''); // Remove non-digit characters

    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    setInputValue(formattedValue);
  };

  // Function to convert the formatted text to numbers for calculations
  const getNumberValue = () => {
    const numberValue = parseInt(inputValue.replace(/\s+/g, ''), 10);
    return isNaN(numberValue) ? 0 : numberValue;
  };

  // Function to perform some calculations and convert back to formatted text
  const performCalculation = () => {
    const numberValue = getNumberValue();
    // Example calculation: multiply by 2
    const calculatedValue = numberValue +2;
    // Convert back to text with formatting
    const calculatedText = calculatedValue.toString().replace(/(\d{4})(?=\d)/g, '$1 ');
    setInputValue(calculatedText);
  };

  return (
    <div>
      <label>Enter number:</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        maxLength="19" // Max length for input (16 digits + 3 spaces)
      />
      <button onClick={performCalculation}>Multiply by 2</button>
      <div>
        <strong>Numeric value:</strong> {getNumberValue()}
      </div>
    </div>
  );
};

export default NumberInput1;
