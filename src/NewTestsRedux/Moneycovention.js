import React, { useState } from 'react';

const MoneyInput = () => {
    const [inputValue, setInputValue] = useState('');

    // Minimum exchange rate
    const minExchangeRate = 1.2;

   
    const enforceMinExchangeRate = (value) => {
        if (parseFloat(value) < minExchangeRate) {
            return minExchangeRate.toString();
        }
        return value;
    };
    
    // Function to format the number
    const formatMoney = (value) => {
        let num = parseFloat(value);

        if (isNaN(num)) return '';

        // Format to thousands, millions, etc.
        if (num >= 1e6) {
            return `${(num / 1e6).toFixed(2)}M`;
        
        } else {
            return num.toLocaleString();
        }
    };

    // Handle input change
    const handleInputChange = (e) => {
        let value = e.target.value;

        // Remove any non-numeric characters except dot
        value = value.replace(/[^0-9.]/g, '');

        // Apply minimum exchange rate
        value = enforceMinExchangeRate(value);

    
        setInputValue(formatMoney(value));
    };

    return (
        <div>
            <label htmlFor="moneyInput">Enter Amount:</label>
            <input
                type="text"
                id="moneyInput"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter amount"
            />
        </div>
    );
};

export default MoneyInput;
