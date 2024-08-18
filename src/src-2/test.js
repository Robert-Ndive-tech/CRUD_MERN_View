import React, { useEffect, useState } from 'react';

const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://dashboard.getquickgrab.com/api/getcurrencies');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCurrencies(data); // Assuming data is an array of currency objects
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Currency List</h1>
      <ul>
        {currencies.map((currency) => (
          <li key={currency.id}>
            <p><strong>Code:</strong> {currency.code}</p>
            <p><strong>Minimum Amount:</strong>{currency.code==5000} &&{ currency.min-currency.rate}</p>
            <p><strong>Rate:</strong> {currency.rate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;
