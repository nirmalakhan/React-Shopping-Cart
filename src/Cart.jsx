import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, setCart }) {
   const Delete = (id) => {
    const newCartData = cart.filter((product) => id !== product);
    setCart(newCartData);
  };

  return (
    <div className="cart main">
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className="cart-main">
        {cart.map((product) => {
          return (
            <div key={product.id} id="cartdata">
              <div>
                <img src={product.image} id="cartimg" />
              </div>
              <div id="info">
                <ul>
                  <li>Id={product.id}</li>
                  <li>Title={product.title}</li>
                  <li>Price={product.price}</li>
                  <li>Category={product.category}</li>
                </ul>
                <button onClick={() => Delete(product)}>Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
