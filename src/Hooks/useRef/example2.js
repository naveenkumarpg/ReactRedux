import React, { useEffect, useState, useRef } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const timeRef = useRef(null);

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  return (
    <>
      <p>Stop watch : {timer}</p>
      <button onClick={() => clearInterval(timeRef.current)}>
        Stop The timer
      </button>
    </>
  );
}

export default App;
