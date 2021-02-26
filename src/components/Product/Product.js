import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";


const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="name-div">
        <h4 className="product-name">{name}</h4>
        <p>by: {seller}</p>
        <br />
        <p>${price}</p>
        <p>
          <small>Only {stock} left-Order soon.</small>
        </p>
        <button className="cart-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
