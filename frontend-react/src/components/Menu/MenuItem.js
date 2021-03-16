import React, { useState } from 'react';
import './menuItem.css';


import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';

function MenuItem(props) {

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => { if (count > 0) { setCount(count - 1) } };
    return (

        <>
            <div className='quantity'>
                <button onClick={increment}><FaArrowAltCircleUp /></button>
                <p>{count}</p>
                <button onClick={decrement}><FaArrowAltCircleDown /></button>

                <div className="items">
                    <h3 className='item_name'>{props.name + " " + props.price}</h3>
                </div>
            </div>


        </>
    )
}

export default MenuItem
