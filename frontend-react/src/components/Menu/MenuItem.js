import React, { useState } from 'react';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';
import './menuItem.css';



function MenuItem(props) {

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (

        <>
            <div className='quantity'>
                <button onClick={increment}><FaArrowAltCircleUp /></button>
                <p>{count}</p>
                <button onClick={decrement}><FaArrowAltCircleDown /></button>
            </div>
            <h3 className='item_name'>{props.name + " " + props.price}</h3>
        </>
    )
}

export default MenuItem
