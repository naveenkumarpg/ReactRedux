import React, { useState } from "react";

function App() {
  const [useretails, setUseretails] = useState({
    username: "",
    email: "",
    password: "",
    rpassword: "",
  });
  const [userData, setUserData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData(useretails);
    setUseretails({ username: "", email: "", password: "", rpassword: "" });
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User Name"
          value={useretails.username}
          onChange={(e) => {
            setUseretails({
              ...useretails,
              username: e.target.value,
            });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          value={useretails.email}
          onChange={(e) => {
            setUseretails({
              ...useretails,
              email: e.target.value,
            });
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={useretails.password}
          onChange={(e) => {
            setUseretails({
              ...useretails,
              password: e.target.value,
            });
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Retype-Password"
          value={useretails.rpassword}
          onChange={(e) => {
            setUseretails({
              ...useretails,
              rpassword: e.target.value,
            });
          }}
        />
        <br />
        <input type="submit" />
        <code>
          <pre>{userData && JSON.stringify(userData, null, 2)}</pre>
        </code>
      </form>
    </>
  );
}

export default App;
