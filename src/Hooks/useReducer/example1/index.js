import React, { useReducer } from "react";

export const initialvalue = 0;

export function counter(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return initialvalue;
  }
}

function App() {
  const [state, dispatch] = useReducer(counter, initialvalue);

  return (
    <>
      <p>count : {state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}

export default App;
