import React from "react";

function Summary({ summary, value }) {
  console.log("Summary component");
  return (
    <p>
      {summary} : {value}
    </p>
  );
}

export default Summary;
