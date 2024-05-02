// App.js
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  function submitted() {
    alert("submitted");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/saveData", { inputData });
      setInputData("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App alert">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputData} onChange={handleChange} />
        <button type="submit" onClick={submitted}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
