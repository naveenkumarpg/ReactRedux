import React, { useContext } from "react";
import D from "./d";

import { AppContext } from "../index";

function B() {
  const importedContext = useContext(AppContext);
  return (
    <>
      <h3>Component B</h3>
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
      <D />
    </>
  );
}

export default B;
