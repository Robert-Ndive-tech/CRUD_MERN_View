import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./components/Home";
//import ReactComponent from "./components/connector";

import Pap1 from "./components/connector2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    <Pap1 />
  </React.StrictMode>
);
