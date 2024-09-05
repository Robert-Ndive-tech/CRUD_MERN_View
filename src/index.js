import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import Pap1 from './components/connector2';
import UploadForm from './src-2/Photodb';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

<Pap1/>

<UploadForm/>


  </React.StrictMode>
);
