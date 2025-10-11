import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../LOgin/Login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/signup", { email, password });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setMessage("Signup successful!");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        setMessage(res.data.error);
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <form onSubmit={handleSignup}>
          <h2>Sign Up</h2>

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

          <button type="submit" className="login-button">Sign Up</button>
        </form>

        {message && <p style={{ color: message.includes("successful") ? "green" : "red" }}>{message}</p>}
      </div>
    </section>
  );
};

export default Signup;
