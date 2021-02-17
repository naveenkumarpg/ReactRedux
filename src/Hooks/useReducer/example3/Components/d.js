import React, { useContext } from "react";

import { AppContext } from "../index";

function D() {
  const importedContext = useContext(AppContext);
  return (
    <>
      <h3>Component D</h3>
      <p>Count value : {importedContext.state.count}</p>
      <button onClick={() => importedContext.dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => importedContext.dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => importedContext.dispatch({ type: "reset" })}>
        reset
      </button>
    </>
  );
}

export default D;
