import React, { useContext } from "react";

import { AppContext } from "../index";

function F() {
  const importedContext = useContext(AppContext);
  return (
    <>
      <h3>Component F</h3>
      <p>Count value : {importedContext.state.count}</p>
      <button onClick={() => importedContext.dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => importedContext.dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => importedContext.dispatch({ type: "reset" })}>
        Reset
      </button>
    </>
  );
}

export default F;
