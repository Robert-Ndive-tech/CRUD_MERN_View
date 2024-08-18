import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./components/Home";
//import ReactComponent from "./components/connector";


import UploadForm from "./src-2/Photodb";
import { Provider } from 'react-redux';

import App from "./App";
import store from "./NewTestsRedux/Testing56";
import MyComponent from "./TEST/NewTest";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>


<MyComponent/>


  </React.StrictMode>
);
