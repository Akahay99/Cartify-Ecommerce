// ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/Product.css";

const products = [
  {
    id: 1,
    name: "Nike Dunks Low Panda",
    price: 3000,
    desc: "Stylish and comfortable sneakers perfect for any occasion.",
    image: "/Homeproduct/228cbb3a7286c43a0017c70a53e52b73.jpg"
  },
  {
    id: 2,
    name: "Fastrack UFO Quartz Multifunction Green Dial Silver",
    price: 1500,
    desc:"Trendy multifunction watch with a green dial and premium design.",
    image: "/Homeproduct/3327SM01_1.jpg"
  },
  {
    id: 3,
    name: "Puma X Mercedes AMG Petronas F1 Team",
    price: 6000,
    desc:"Official F1 collaboration shoes for speed, comfort, and style.",
    image: "/Homeproduct/51a3Sq55qhL.jpg"
  },
  {
    id: 4,
    name: "Oracle Red Bull Racing X Max Verstappen T-Shirt",
    price: 4000,
    desc:"Official Red Bull Racing T-shirt, soft cotton fabric, stylish fit",
    image: "/Homeproduct/61jaMD4nngL.webp"
  },
  {
    id: 5,
    name: "Castore Red Bull Racing F1 Team Rain Jacket (M)",
    price: 7000,
    desc:"Waterproof racing jacket designed for style and performance",
    image: "/Homeproduct/71gTGBgAg7L.jpg"
  },
  {
    id: 6,
    name: "Black And White hoodie combo",
    price: 2999,
    desc:"Premium quality hoodie combo — perfect for casual and sporty looks",
    image: "/Homeproduct/black-white-hoodies-wooden-background_447653-25981.jpg"
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

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

export default ProductDetail;
