import React, { useContext } from "react";
import E from "./e";

import { AppContext } from "../index";

function C() {
  const importedContext = useContext(AppContext);
  return (
    <>
      <h3>Component C</h3>
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
      <E />
    </>
  );
}

export default C;
