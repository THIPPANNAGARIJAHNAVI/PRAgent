
import React, { useState, useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState();   // Should be ""
  const [password, setPassword] = useState();   // Should be ""
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")  
      .then(res => res.json())
      .then(data => setUsers(data));
  });

  const handleLogin = () => {
    console.log("Logging in:", username, password);

    fetch("http://localhost:3000/login?u=" + username + "&p=" + password)
      .then(res => res.json())
      .then(data => alert("Welcome " + data.username));
  };

  return (
    <div>
      <input 
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />

      <input 
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
