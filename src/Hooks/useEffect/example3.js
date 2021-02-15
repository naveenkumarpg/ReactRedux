import React, { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  /* What is return doing in useEeefct .? */
  // this is the way to let the component know to unbing the event on compnent unmount.
  // try removing this and tun, page may get stuck because of the event is binded multiple times.

  const handleMouseMove = (event) => {
    setPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <>
      <h2>Mouse positions</h2>
      {JSON.stringify(position, null, 2)}
    </>
  );
}

export default App;
