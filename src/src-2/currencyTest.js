import React, { useState, useEffect } from 'react';

const MyComponent7 = () => {
  // State to store all the currencies data
  const [currencies, setCurrencies] = useState([]);
  // State to store the selected currency details (initially null)
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the backend API
        const response = await fetch('https://dashboard.getquickgrab.com/api/getcurrencies');
        const data = await response.json();
        setCurrencies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  // Function to handle displaying only USD details
  const handleShowUSD = () => {
    const usdCurrency = currencies.find(currency => currency.code === 'NGN');
    setSelectedCurrency(usdCurrency || null);
  };

  return (
    <div>
      <h1>Currency Details</h1>
      <button onClick={handleShowUSD}>Show USD Details</button>
      
      {selectedCurrency ? (
        <div>
          <h2>USD Currency Details</h2>
          <p>Rate: {selectedCurrency.rate}</p>
          <p>Min: {selectedCurrency.min}</p>
          <p>Countrycode: {selectedCurrency.code}</p>
        </div>
      ) : (
        <p>No USD data available.</p>
      )}
    </div>
  );
};

export default MyComponent7;
