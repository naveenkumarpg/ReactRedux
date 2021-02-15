import React, { useReducer } from "react";

export const initialvalue = {
  count: 0,
};

export function counter(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "reset":
      return initialvalue;

    default:
      return initialvalue;
  }
}

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
