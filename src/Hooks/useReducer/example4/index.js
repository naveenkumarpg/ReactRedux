import React, { useReducer, useEffect } from "react";
import { initialstate, reducer } from "./Reducer";
import axios from "axios";

function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res);
        dispatch({ type: "FETCH_SUCESS", payload: res.data });
      })
      .catch((eror) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  console.log(state);
  return (
    <>
      {state.loading ? (
        <h2>Loading...!</h2>
      ) : (
        <>
          <h2>{state.data.title}</h2>
          <p>{state.data.body}</p>
        </>
      )}
      {state.error && <h2 className="error">{state.error}</h2>}
    </>
  );
}

export default App;
