import React from 'react'
import './checkoutbutton.css'
// import { state } from 'react';

function CheckoutButton() {

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <button className='checkoutbtn' onClick={handleClick} placeholder="Checkout" >
            <h1>Checkout</h1>
        </button>
    )
}

export default CheckoutButton
