import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function Pap() {
 const [id, setId] = useState('');
 const [product, setProduct] = useState('');
 const [price, setPrice] = useState('');

 const getData = async () => {
    const response = await axios.get('http://localhost:3000/sales');
    console.log(response.data);
 };

 const postData = async () => {
    const data = { product, price };
    const response = await axios.post('http://localhost:3000/sales', data);
    console.log(response.data);
 };

 const putData = async () => {
    const data = { product, price };
    const response = await axios.put(`http://localhost:3000/sales/${id}`, data);
    console.log(response.data);
 };

 const deleteData = async () => {
    const response = await axios.delete(`http://localhost:3000/sales/${id}`);
    console.log(response.data);
 };

 return (
    <div className="App">
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" placeholder="Product" value={product} onChange={(e) => setProduct(e.target.value)} />
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <br />
      <button onClick={getData}>Get Data</button>
      <button onClick={postData}>Add Sale</button>
      <button onClick={putData}>Update Sale</button>
      <button onClick={deleteData}>Delete Sale</button>
    </div>
 );
}

export default Pap;