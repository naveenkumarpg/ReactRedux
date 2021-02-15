import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You have been changed ${count} times`;
  });
  // If no parameter is passes it will call evety time the component state is chagned.

  return (
    <button
      onClick={() => {
        setCount((prevCount) => prevCount + 1);
      }}
    >{`I was clicked here ${count} times`}</button>
  );
}

export default App;
