import React from 'react'
import './button.css'
// import { state } from 'react';

function Button() {

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

export default Button
