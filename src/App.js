import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      console.log(response.data)
    });
  }, []);

  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <div className="col">
      <div className="col_left">
      {/* Product Listing Page */}
      <h2>Products</h2>
      {products.map((product) => (
        
        <div key={product.id} className="product_new">
          <h3 className="product_title">{product.title}</h3>


          <p className="product_desc">{product.description}</p>
          <button className="btn" onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      ))}
  </div>
  <div className="col_right">
      {/* Cart Items List Page */}
      <h2 className="headding_cart">Cart</h2>
      {cart.map((cartItem) => (
        <div key={cartItem.id}>
          <h3>{cartItem.title}</h3>
          <p>{cartItem.description}</p>
          <p>${cartItem.price}</p>
          <button className="btn-cart" onClick={() => removeFromCart(cartItem)}>Remove</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default App;