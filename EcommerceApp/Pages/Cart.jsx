import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart") || "[]"));

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const proceedToPayment = () => {
    navigate("/payment");
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  if (!cart.length) return <h2 className="empty-cart">Your cart is empty!</h2>;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.map((item, idx) => (
        <div className="cart-item" key={idx}>
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
          </div>
          <p className="cart-item-price">₹{item.price}</p>
          <button className="remove-btn" onClick={() => removeItem(idx)}>Remove</button>
        </div>
      ))}
      <div className="total-section">
        <h3>Total: ₹{total}</h3>
        <button className="cart-btn" onClick={proceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Cart;
