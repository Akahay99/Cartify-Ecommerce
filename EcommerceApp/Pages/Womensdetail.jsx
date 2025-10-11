import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/Women.css";

const womenproducts = [
  { id: 1, name: "Croptop", price: 3000, desc: "Stylish croptop for casual wear.", image: "/Womenproducts/croptop.jpg" },
  { id: 2, name: "H&M jeans", price: 1500, desc: "Comfortable H&M jeans.", image: "/Womenproducts/hm.jpg" },
  { id: 3, name: "Nike Running shoes", price: 1500, desc: "Durable running shoes for women.", image: "/Womenproducts/womenpuma.webp" },
  { id: 4, name: "Titan Watch", price: 1700, desc: "Elegant Titan watch.", image: "/Womenproducts/titan.webp" },
  { id: 5, name: "Zara Dress", price: 7999, desc: "Premium Zara dress for special occasions.", image: "/Womenproducts/zara.jpg" },
];

const WomenDetail = () => {
  const { id } = useParams();
  const product = womenproducts.find(p => p.id === parseInt(id));

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="detail-image" />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <h3>Price: ₹{product.price}</h3>
        <button className="btn-buy" onClick={() => addToCart(product)}>Buy Now</button>
      </div>
    </div>
  );
};

export default WomenDetail;
