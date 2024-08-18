import React, { useState ,useEffect} from "react";
import currencies from "./currencies.json";

const CurrencyConverter4 = () => {
    
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("XAF");
  const [conversionResult, setConversionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rates,setRate]=useState(0.001)
  const [currency, setCurrency] = useState([]);

  const [selectedCurrency, setSelectedCurrency] = useState(null);


  useEffect(() => {
    const handleConvert = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://dashboard.getquickgrab.com/api/getcurrencies`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rate");
        }
        const data = await response.json();
        setCurrency(data);  
          const usdCurrency = currency.find(currency => currency.code === fromCurrency);
          setSelectedCurrency(usdCurrency || null);
       
          const result = amount * usdCurrency.rate
          setConversionResult(result)

        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };    handleConvert();
}, [fromCurrency, toCurrency, amount]);
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
        min="5000"
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
            onChange={(e)=>setFromCurrency(e.target.value)}
          
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

    

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {conversionResult !== null && (
        <p style={{ marginTop: "20px" }}>
          {amount} {fromCurrency} = {conversionResult.toFixed(2)} {toCurrency}
        </p>
      )}
<div>
<div>ExchangeRate: 
      {selectedCurrency ? 
       selectedCurrency.rate
           : (
        <p>No USD data available.</p>
      )}</div>



   <h3> FROM MY ANALYSIS I FOUND TWO INTERESTING ONLINE  Paid API'S</h3>
    WHICH ARE <h5>fixer.io(has a free tier 1000request/month and daily updates with its minimum plan of 11$/month,has 170 curriences) WHILE
    </h5><h5>OpenExchangeRate has( no free tier,has 200 currencies,minimum plan is 12$/month)</h5> 
</div>


    </div>
  );
};

export default CurrencyConverter4;
