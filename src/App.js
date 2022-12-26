import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";

const App = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);
  console.log(items);

  const GetCart = (items) => {
    setCart((previousState) => [...previousState, items]);
  };
  // console.log("cart", cart);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Product items={items} GetCart={GetCart} />}
          />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
