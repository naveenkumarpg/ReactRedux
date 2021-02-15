import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  });

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  return (
    <>
      <h2>Network Status </h2>
      <p>You are : {status ? "Online" : "Offline"}</p>
    </>
  );
}

export default App;
