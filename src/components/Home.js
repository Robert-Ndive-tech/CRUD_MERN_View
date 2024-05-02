import React, { useState } from 'react';
import "./style.css";

const SalesTable = ({ data }) => {
 const columns = data.length ? Object.keys(data[0]) : [];
 const [selectedColumn, setSelectedColumn] = useState(columns[0]);

 const handleClick = (e) => {
    setSelectedColumn(e.target.value);
 };

 const handleReset = () => {
    setSelectedColumn(columns[0]);
 };

 const handleExport = () => {
    const csv = data.map(row => Object.values(row).join(',')).join('\n');
    const hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'sales_data.csv';
    hiddenElement.click();
 };

 return (
    <div>
      <h2>Sales Table</h2>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleExport}>Export</button>
      <div>
        {columns.map((column, index) => (
          <button
            key={index}
            value={column}
            onClick={handleClick}
            className={selectedColumn === column ? 'selected' : ''}
          >
            {column}
          </button>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

const Home = () => {
 const data = [
    { sales_date: '2021-09-01', model: 'Trek', units_sold: 500 },
    { sales_date: '2021-09-02', model: 'Giant', units_sold: 600 },
    { sales_date: '2021-09-03', model: 'Yeti', units_sold: 700 },
 ];

 return (
    <div className="App">
      <SalesTable data={data} />
    </div>
 );
};

export default Home;