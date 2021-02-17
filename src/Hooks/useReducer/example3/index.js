import React, { useReducer, createContext } from "react";
import { initialstate, reducer } from "./Reducer/index";

import A from "./Components/a";
import B from "./Components/b";
import C from "./Components/c";

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <table border="1" cellPadding="0" cellSpacing="0">
          <tr>
            <td className="center" colSpan="3">
              Count {state.count}
            </td>
          </tr>
          <tr>
            <td>
              <A />
            </td>
            <td>
              <B />
            </td>
            <td>
              <C />
            </td>
          </tr>
        </table>
      </AppContext.Provider>
    </>
  );
}

export default App;
