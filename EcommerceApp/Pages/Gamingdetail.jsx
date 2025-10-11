// Gamingdetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import '../Styles/Gamingdetail.css';

const gamingproducts = [
  { id: 1, name: "F1 Simulator", price: 30000, desc: "High-end racing simulator.", image: "/GamingProduct/F1sim.jpg" },
  { id: 2, name: "HyperX Cloud Core Pro", price: 3500, desc: "Comfortable gaming headset.", image: "/GamingProduct/hyperxcloudcore.webp" },
  { id: 3, name: "Gaming Keyboard", price: 1000, desc: "Mechanical RGB keyboard.", image: "/GamingProduct/keybord.webp" },
  { id: 4, name: "144Hz Monitor", price: 20000, desc: "Smooth refresh rate monitor.", image: "/GamingProduct/monitor.jpg" },
  { id: 5, name: "Gaming Mouse", price: 1200, desc: "Ergonomic gaming mouse.", image: "/GamingProduct/mouse.webp" },
  { id: 6, name: "Nvidia RTX 5090 GPU", price: 412999, desc: "Top-tier graphics card.", image: "/GamingProduct/rtx5090.webp" },
];

const GamingDetail = () => {
  const { id } = useParams();
  const product = gamingproducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="detail-image" />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <h3>Price: ₹{product.price}</h3>
        <button className="btn-buy" onClick={addToCart}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default GamingDetail;
