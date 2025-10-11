import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Product from "../Pages/Products";
import ProductDetail from "../Pages/Productdetail";
import Gaming from "../Pages/Gaming";
import GamingDetail from "../Pages/Gamingdetail";
import Cart from "../Pages/Cart";
import Login from "../LOgin/Login";
import Womendetails from "../Pages/Womensdetail";
import Women from "../Pages/Womens";
import Payment from "../Pages/Payment";

import Signup from "../LOgin/Signup";
const App = () => {
  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={<Product category="men" searchQuery={searchQuery} />}
        />
        <Route
          path="/women"
          element={<Women searchQuery={searchQuery} />}
        />
        <Route
          path="/women/:id"
          element={<Womendetails cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/gaming"
          element={<Gaming searchQuery={searchQuery} />}
        />
        <Route
          path="/gaming/:id"
          element={<GamingDetail cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
