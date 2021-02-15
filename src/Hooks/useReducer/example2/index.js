import React, { useReducer } from "react";

import { initialvalue, counter } from "./reduce";

function App() {
  const [state, dispatch] = useReducer(counter, initialvalue);

  return (
    <>
      <p>count : {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default App;
