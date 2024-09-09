import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import Displaycard from './e-commerce/Dashboard';
import CommerceDa from './e-commerce/pages';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>


<CommerceDa/>
<Displaycard/>

  </React.StrictMode>
);
