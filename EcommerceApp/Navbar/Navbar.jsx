import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import logo from "../src/assets/logo.png";
import cartlogo from "../src/assets/shopping-cart.png";
import "./Navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/");
  };

  // Check for JWT in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUserEmail(payload.user.email);
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserEmail("");
    navigate("/login");
  };

  return (
    <div className="navbar-container">
      <div className="left">
        <img src={logo} alt="Cartify Logo" className="nav-logo" />
        <h1>Welcome To Cartify</h1>
      </div>

      <div className="center-section">
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/women" className="nav-link">Women</Link></li>
          <li><Link to="/gaming" className="nav-link">Men</Link></li>
        </ul>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">Go</button>
        </form>
      </div>

      <div className="nav-right">
        {userEmail ? (
          <div className="user-dropdown">
            <span className="user-email">{userEmail}</span>
            <div className="dropdown-content">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}

        <div className="cart-container">
          <Link to="/cart">
            <img src={cartlogo} className="cart-logo" alt="cart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
