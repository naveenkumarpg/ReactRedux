import React from "react";

function Title({ text }) {
  console.log("title component");
  return <>{text && <h1>{text}</h1>}</>;
}

export default Title;
