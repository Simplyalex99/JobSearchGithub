import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Slider from "./Slider.js";
import Grocery from "./Grocery.js";
import TodoList from "./TodoList.js";
ReactDOM.render(
  <React.StrictMode>
<App></App>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
