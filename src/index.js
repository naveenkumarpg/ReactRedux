import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
// import App from "./Hooks/useState/example1";
// import App from "./Hooks/useState/example2";

// import App from "./Hooks/useEffect/example1";
// import App from "./Hooks/useEffect/example2";
import App from "./Hooks/useEffect/example3";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
