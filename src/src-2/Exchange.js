import React, { useState } from "react";
import currencies from "./currencies.json";

const CurrencyConverter2 = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("XAF");
  const [conversionResult, setConversionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rates,setRate]=useState(0.001)

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
   setRate(rate);
      const result = amount * rate;
      setConversionResult(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getCurrencyDetails = (currencyCode) => {
    return currencies.currencies.find(
      (currency) => currency.code === currencyCode
    );
  };

  const fromCurrencyDetails = getCurrencyDetails(fromCurrency);
  const toCurrencyDetails = getCurrencyDetails(toCurrency);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2 style={{color:"Blue",fontWeight:"bolder"}}>Currency Converter using ExchangeRate API</h2>
      <h4 style={{color:"Blue",fontWeight:"bolder"}}>(minimum plan of $14.99/month,has a free tier(1500request/month), with minimun tier(30,000request/month))</h4>
     
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={fromCurrencyDetails.flag}
            alt={fromCurrency}
            style={{ width: "40px", height: " 40px", marginRight: "10px" }}
          />

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

        </div>
        <div style={{ display: "flex", alignItems: "center" }}>

          <img
            src={toCurrencyDetails.flag}
            alt={toCurrency}
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />

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
<div>
<div>ExchangeRate: {rates}</div>



   <h3> FROM MY ANALYSIS I FOUND TWO INTERESTING ONLINE  Paid API'S</h3>
    WHICH ARE <h5>fixer.io(has a free tier 1000request/month and daily updates with its minimum plan of 11$/month,has 170 curriences) WHILE
    </h5><h5>OpenExchangeRate has( no free tier,has 200 currencies,minimum plan is 12$/month)</h5> 
</div>


    </div>
  );
};

export default CurrencyConverter2;
