
import React, { useState, useEffect } from "react";

const BadLogin = () => {
  const [u, setU] = useState();
  const [p, setP] = useState();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/get-all-users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  });

  const loginNow = () => {
    console.log("Trying login with:", u, p);

    fetch(
      "http://localhost:3000/login?user=" + u + "&pass=" + p
    )
      .then((res) => res.json())
      .then((d) => {
        alert("Logged in as " + d.username);
      });
  };

  return (
    <div style={{ padding: 20, background: "#eee" }}>
      <h2>Login Form</h2>

      <input
        placeholder="username"
        onChange={(e) => setU(e.target.value)}
      />

      <input
        placeholder="password"
        onChange={(e) => setP(e.target.value)}
      />

      <button onClick={() => loginNow()}>
        Login
      </button>

      <p>Attempts allowed: 42</p>

      <pre>{JSON.stringify(allUsers, null, 2)}</pre>
    </div>
  );
};

export default BadLogin;
