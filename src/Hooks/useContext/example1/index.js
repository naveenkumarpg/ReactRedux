import React from "react";
import App from "./app";

export const UserContext = React.createContext();
const userName = "Naveen";

function index() {
  return (
    <div>
      <UserContext.Provider value={userName}>
        <App />
      </UserContext.Provider>
    </div>
  );
}

export default index;
