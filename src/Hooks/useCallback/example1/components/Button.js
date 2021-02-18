import React from "react";

function Button({ children, event }) {
  console.log("Button Component");
  return <button onClick={event}>{children}</button>;
}

export default Button;
