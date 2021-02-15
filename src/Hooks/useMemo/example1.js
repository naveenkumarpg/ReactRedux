import React, { useState, useMemo } from "react";

function App() {
  const [val, setVal] = useState(2);
  const [color, setColor] = useState(true);

  const valColor = color ? "bgray" : "bgreen";
  const mulColor = color ? "bgreen" : "bgray";

  const handleIncrease = () => {
    setVal((prevVal) => prevVal + 1);
  };

  const handleDecrease = () => {
    setVal((prevVal) => prevVal - 1);
  };

  const handleReset = () => {
    setVal((prevVal) => 0);
  };

  const toggleColor = () => {
    setColor((prevColor) => !prevColor);
  };

  const slowFunction = (a) => {
    console.log("Double the number");
    for (let i = 0; i < 1000000000; i++) {}
    return a * a;
  };

  // Problem creator this is because its taking more time to render
  // since doubleNumber function is going to call every time the the component is changed, this will take lot of time to re-render the component.
  const doubleNumber = useMemo(() => {
    return slowFunction(val);
  }, [val]);

  return (
    <>
      <p className={valColor}>Value : {val}</p>
      <p className={mulColor}>Double the number : {doubleNumber}</p>
      <br />
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={toggleColor}>Toggle Color</button>
    </>
  );
}

//
//

export default App;
