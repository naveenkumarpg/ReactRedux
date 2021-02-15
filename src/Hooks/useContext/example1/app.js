import React from "react";
import { UserContext } from "./index";

function App() {
  const value = React.useContext(UserContext);

  return <p>Hello, {value}</p>;
}

export default App;
