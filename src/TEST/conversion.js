import React, { useState } from "react";

const NumberInput = () => {
  const [inputValue, setInputValue] = useState("");

  // Function to format the input value with spaces after every 4 digits
  const formatInput = (value) => {
    // Remove any non-digit characters (just in case)
    const cleaned = value.replace(/\D/g, "");

    // Format with spaces after every 4 digits

    const formatted = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ').trim()

    return formatted;
  };

  // Handle input change
  const handleChange = (e) => {
    const { value } = e.target;

    // Allow only digits and format the input
    const formattedValue = formatInput(value);
    setInputValue(formattedValue);
  };

  // Convert the formatted string back to a number for calculation
  const convertToNumber = () => {
    const numberValue = parseInt(inputValue.replace(/\s/g, ""), 10);
    return numberValue;
  };

  // Example calculation: Add 1000 to the number
  const calculate = () => {
    const numberValue = convertToNumber();
    const result = numberValue + 5;

    // Convert back to formatted string for display
    const formattedResult = formatInput(result.toString());
    return formattedResult;
  };

  return (
    <div>
      <h3>Number Input</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter numbers"
      />
      <p>Formatted Number: {inputValue}</p>
      <p>Calculation Result: {calculate()}</p>
    </div>
  );
};

export default NumberInput;
