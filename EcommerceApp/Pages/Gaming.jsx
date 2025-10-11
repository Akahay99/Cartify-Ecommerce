import { Link } from "react-router-dom";
import React from "react";
import "../Styles/Gaming.css";

const gamingproducts = [
  { id: 1, name: "F1 Simulator", price: 30000, desc: "High-end racing simulator.", image: "/GamingProduct/F1sim.jpg" },
  { id: 2, name: "HyperX Cloud Core Pro", price: 3500, desc: "Comfortable gaming headset.", image: "/GamingProduct/hyperxcloudcore.webp" },
  { id: 3, name: "Gaming Keyboard", price: 1000, desc: "Mechanical RGB keyboard.", image: "/GamingProduct/keybord.webp" },
  { id: 4, name: "144Hz Monitor", price: 20000, desc: "Smooth refresh rate monitor.", image: "/GamingProduct/monitor.jpg" },
  { id: 5, name: "Gaming Mouse", price: 1200, desc: "Ergonomic gaming mouse.", image: "/GamingProduct/mouse.webp" },
  { id: 6, name: "Nvidia RTX 5090 GPU", price: 412999, desc: "Top-tier graphics card.", image: "/GamingProduct/rtx5090.webp" },
];

const Gaming = ({ searchQuery }) => {
  // Filter products based on search
  const filteredProducts = gamingproducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  // Add product to cart
  const handleBuyNow = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="products-container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/gaming/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button className="btn-buy" onClick={() => handleBuyNow(product)}>
              Buy Now
            </button>
          </div>
        ))
      ) : (
        <h3>No gaming products found for "{searchQuery}"</h3>
      )}
    </div>
  );
};

export default Gaming;
