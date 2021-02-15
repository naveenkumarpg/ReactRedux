import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import reportWebVitals from "./reportWebVitals";

// useState Examples
// import App from "./Hooks/useState/example1";
// import App from "./Hooks/useState/example2";
// import App from "./Hooks/useState/example3";

// useEffect  Exampeles
// import App from "./Hooks/useEffect/example1";
// import App from "./Hooks/useEffect/example2";
// import App from "./Hooks/useEffect/example3";
// import App from "./Hooks/useEffect/example4";
// import App from "./Hooks/useEffect/example5";
// import App from "./Hooks/useEffect/example6";

// useRef Examples
// import App from "./Hooks/useRef/example1";

// useMemo Examples
import App from "./Hooks/useMemo/example1";

// useContext Examples
// import App from "./Hooks/useContext/example1/index";

// useReducer example
// import App from "./Hooks/useReducer/example1/index";
// import App from "./Hooks/useReducer/example2/index";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
