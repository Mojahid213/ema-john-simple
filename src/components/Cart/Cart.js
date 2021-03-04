import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total+product.price;
    }
    let shipping=0;
    if(total>35){
        shipping=0;
    }else if(total>15){
        shipping=6.99;
    }else if(total>0){
        shipping=12.99;
    }
    const tax = Math.round(total/10);
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Shipping cost: {shipping}</p>
            <p>tax: {tax}</p>
            <p>Total price: {total+shipping+tax}</p>
        </div>
    );
};

export default Cart;