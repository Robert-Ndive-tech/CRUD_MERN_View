import React, { useEffect, useState } from "react";

import "./connector.css";

function Product() {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  //useEffect(()=>{fetch("http://localhost:4500/brands/display").then(res=>res.json()).then(data=>setData(data)).catch(err=>console.log(err))},[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:4500/products/display`);
      const data = await response.json();
      if (data.length === 0) {
      } else {
        setData(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="name">Brand Name:</label>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Brand Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <table>
        <thead>
          <th>PRODUCT_ID</th>
          <th>PRODUCT_NAME</th>
          <th>BRAND_ID</th>
          <th>CATEGORY_ID</th>
          <th>MODEL_YEAR</th>
          <th>LIST_PRICE</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.product_id}</td>
              <td>{d.product_name}</td>
              <td>{d.brand_id}</td>
              <td>{d.category_id}</td>
              <td>{d.model_year}</td>
              <td>{d.list_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Pap1() {
  const [results, setData] = useState([]);
  const [name, setName] = useState("");
  //useEffect(()=>{fetch("http://localhost:4500/brands/display").then(res=>res.json()).then(data=>setData(data)).catch(err=>console.log(err))},[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4500/brands/display/${name}`
      );
      const data = await response.json();
      if (data.length === 0) {
      } else {
        setData(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="name">Brand Name:</label>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Brand Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <table>
        <thead>
          <th>ID</th>
          <th>NAME</th>
        </thead>
        <tbody>
          {results.map((item) => (
            <tr key={item.id}>
              <td>{item.brand_id}</td>
              <td>{item.brand_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <Product />
      </div>
      <div>
        <Customer />
      </div>
    </div>
  );
}

function Customer() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  //useEffect(()=>{fetch("http://localhost:4500/brands/display").then(res=>res.json()).then(data=>setData(data)).catch(err=>console.log(err))},[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4500/customers/display/${name}`
      );
      const data = await response.json();
      if (data.length === 0) {
      } else {
        setData(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="name">Brand Name:</label>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Brand Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <table>
        <thead>
          <th>CUSTOMER_ID</th>
          <th>NAME</th>
          <th>PHONE</th>
          <th>EMAIL</th>
          <th>STREET</th>
          <th>CITY</th>
          <th>STATE</th>
          <th>ZIP_CODE</th>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.customer_id}</td>
              <td>{d.first_name + "  " + d.last_name}</td>
              <td>{d.phone}</td>
              <td>{d.email}</td>
              <td>{d.street}</td>
              <td>{d.city}</td>
              <td>{d.state}</td>
              <td>{d.zip_code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pap1;
