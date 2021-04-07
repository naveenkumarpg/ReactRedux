import React from "react";
import ReactDOM from "react-dom";

function App() {
  return ReactDOM.createPortal(
    <h2>Portals Demo</h2>,
    document.getElementById("portal-root")
  );
}

export default App;
