import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("First time only ");
  }, []);
  //Because of the parameter is being passed as empty array, it will be called only first time

  return (
    <button
      onClick={() => {
        setCount((prevCount) => prevCount + 1);
      }}
    >{`I was clicked here ${count} times`}</button>
  );
}

export default App;
