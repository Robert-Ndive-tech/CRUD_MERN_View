import React, { useState } from "react";
import currencies from "./currencies.json";

const CurrencyC = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [conversionResult, setConversionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConvert = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch exchange rate");
      }
      const data = await response.json();
      const rate = data.rates[toCurrency];
      const result = amount * rate;
      setConversionResult(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <div style={{ marginBottom: "10px" }}>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        >
          {currencies.currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.symbol}
            </option>
          ))}
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          style={{ padding: "8px" }}
        >
          {currencies.currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.symbol}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleConvert}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Convert
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {conversionResult !== null && (
        <p style={{ marginTop: "20px" }}>
          {amount} {fromCurrency} = {conversionResult.toFixed(2)} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyC;
