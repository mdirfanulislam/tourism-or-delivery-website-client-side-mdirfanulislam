import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const place of cart) {
        if (!place.quantity) {
            place.quantity = 1;
        }
        total = total + place.amount * place.quantity;
        totalQuantity = totalQuantity + place.quantity;
    }

    const extra = total > 0 ? 500 : 0;
    const grandTotal = total + extra;
    return (
        <div className="cart-container">
            <h3>Payment Summary</h3>
            <h5>Person: {totalQuantity}</h5>
            <br />
            <p>Amount: {total.toFixed(2)}</p>
            <p>Extra Amount: {extra}.00</p>
            <p>Total Amount: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;