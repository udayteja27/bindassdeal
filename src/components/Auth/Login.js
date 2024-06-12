import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../../services/authService";
import { setSession } from "../../utils/session";
import "./Login.css";

const Login = () => {
  console.log("Login component is rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUser(username, password)) {
      setSession(username);
      navigate("/landing");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-form-container">
      <form className="form-content-container" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="Username" className="label">
            Username
          </label>
          <input
            id="Username"
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
