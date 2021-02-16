import React, { useContext } from "react";

import { UserContext, TitleContext } from "./index";

function C() {
  const user = useContext(UserContext);
  const title = useContext(TitleContext);
  return (
    <>
      <h2>C</h2>
      <p>Component C</p>
      <p>
        welcome {user}.!, you are {title}
      </p>
    </>
  );
}

export default C;
