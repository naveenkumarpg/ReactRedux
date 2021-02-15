import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const usernameHandleChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userdetails = {
      username,
      password,
    };

    setUserData(userdetails);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={usernameHandleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={passwordHandleChange}
        />
        <br />
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
