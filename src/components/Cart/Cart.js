import React from 'react';

const Cart = (props) => {
    const products = props.cart;
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    const shipping = total > 0? 15: 0; 
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
        return (
        <div>
            <h3>Order summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <h5>Total: {total.toFixed(2)}</h5>
            <h5>Shipping: {shipping.toFixed(2)}</h5>
            <h5>Tax: {tax.toFixed(2)}</h5>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;