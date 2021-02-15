import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
        // setCount((prevCount) => prevCount + 1); // This is the way to call previous state
      }}
    >{`I was clicked here ${count} times`}</button>
  );
}

export default App;
