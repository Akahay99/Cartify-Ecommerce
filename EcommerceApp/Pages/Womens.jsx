import React from 'react';
import '../Styles/Women.css';
import { Link } from "react-router-dom";

const womenproducts = [
  { id: 1, name: "Croptop", price: 3000, desc: "Stylish croptop for casual wear.", image: "/Womenproducts/croptop.jpg" },
  { id: 2, name: "H&M jeans", price: 1500, desc: "Comfortable H&M jeans.", image: "/Womenproducts/hm.jpg" },
  { id: 3, name: "Nike Running shoes", price: 1500, desc: "Durable running shoes for women.", image: "/Womenproducts/womenpuma.webp" },
  { id: 4, name: "Titan Watch", price: 1700, desc: "Elegant Titan watch.", image: "/Womenproducts/titan.webp" },
  { id: 5, name: "Zara Dress", price: 7999, desc: "Premium Zara dress for special occasions.", image: "/Womenproducts/zara.jpg" },
];

const Women = ({ searchQuery }) => {
  // Filter products based on search
  const filteredProducts = womenproducts.filter(product =>
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
            <Link to={`/women/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <p>₹{product.price}</p>
            <button className="btn-buy" onClick={() => handleBuyNow(product)}>
              Buy Now
            </button>
          </div>
        ))
      ) : (
        <h3>No products found for "{searchQuery}"</h3>
      )}
    </div>
  );
};

export default Women;
