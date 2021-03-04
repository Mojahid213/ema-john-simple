import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [Products, setProducts] = useState(first10);
  const [cart,setcart] = useState([])

  const handleAddCard = (product) =>{
    const newCart = [...cart, product];
    setcart(newCart);
   }


  return (
    <div className="shop-container">
      <div className="product-container">
        {Products.map((pd) => (
          <Product handleAddCard={handleAddCard} product={pd}></Product>
        ))}
      </div>
      <div className="cart-container">
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
