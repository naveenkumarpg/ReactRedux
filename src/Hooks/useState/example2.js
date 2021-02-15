import React, { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(true);

  return (
    <>
      {isOn && <div className="gray"></div>}
      {!isOn && <div className="green"></div>}
      <br />
      <button
        onClick={() => {
          setIsOn((prevIsOn) => !prevIsOn); // This is the way to call previous state
        }}
      >
        Click to change
      </button>
    </>
  );
}

export default App;
