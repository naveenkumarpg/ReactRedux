import React, { useState } from "react";

function Example4() {
  const [details, setDetails] = useState({
    fname: "",
    email: "",
    password: "",
    rpassword: "",
  });

  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div>
      <div>
        <input
          placeholder="Name"
          name="fname"
          value={details.fname}
          onChange={(e) => {
            setDetails({
              ...details,
              fname: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          placeholder="Email"
          name="email"
          value={details.email}
          onChange={(e) => {
            setDetails({
              ...details,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          placeholder="Password"
          name="password"
          value={details.password}
          onChange={(e) => {
            setDetails({
              ...details,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          placeholder="Re-Enter password"
          name="rpassword"
          value={details.rpassword}
          onChange={(e) => {
            setDetails({
              ...details,
              rpassword: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setButtonClicked(true);
          }}
        >
          Submit the details
        </button>
      </div>

      {buttonClicked && <div>{JSON.stringify(details, null, 2)}</div>}
    </div>
  );
}

export default Example4;
