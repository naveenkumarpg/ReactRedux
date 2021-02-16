import React, { createContext } from "react";
import A from "./comp-a";

export const UserContext = createContext();
export const TitleContext = createContext();

function App() {
  return (
    <>
      <UserContext.Provider value="Naveen">
        <TitleContext.Provider value="Manager">
          <h2>Index</h2>
          <A />
        </TitleContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
