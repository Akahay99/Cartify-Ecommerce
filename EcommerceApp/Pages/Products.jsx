import React from "react";
import "../Styles/Product.css";
import { Link } from "react-router-dom";
import { allProducts } from "../allproduct/allproduct";

// productsData.js




const Product = ({ searchQuery }) => {
  // Filter products based on search query
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
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
            <Link to={`/product/${product.id}`}>
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
        <h3>No products found for "{searchQuery}"</h3>
      )}
    </div>
  );
};

export default Product;
