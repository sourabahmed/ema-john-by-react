import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const{name, img, price, stock, seller} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-description">
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>price: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddCard(props.product)} className="button-regular">add to card</button>
            </div>
        </div>
    );
};

export default Product;