import React, { useContext } from "react";
import F from "./f";

import { AppContext } from "../index";

function E() {
  const imporContext = useContext(AppContext);
  return (
    <>
      <h3>Component E</h3>
      <p>Count value : {imporContext.state.count}</p>
      <button onClick={() => imporContext.dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => imporContext.dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => imporContext.dispatch({ type: "reset" })}>
        Reset
      </button>
      <F />
    </>
  );
}

export default E;
