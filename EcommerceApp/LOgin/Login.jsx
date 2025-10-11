import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../LOgin/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token); // save JWT
        setMessage("Login successful!");
        // Redirect to homepage or any page
        setTimeout(() => {
          navigate("/"); // redirect to home after 1 second
        }, 1000);
      } else {
        setMessage(res.data.error);
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="login-form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              required
            />
          </div>

          <div className="login-form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        {message && (
          <p
            style={{
              color: message.includes("successful") ? "green" : "red",
              marginTop: "10px",
              textAlign: "center"
            }}
          >
            {message}
          </p>
        )}

        <p className="login-footer">
          Don't have an account? <span onClick={() => navigate("/signup")} style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
