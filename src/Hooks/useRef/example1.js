import React, { useRef } from "react";

function App() {
  const inputField = useRef("null");

  const focusToTheButton = () => {
    // Need to focus here
    inputField.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputField} />
      <button onClick={focusToTheButton}>Click here to focus</button>
    </>
  );
}

export default App;
