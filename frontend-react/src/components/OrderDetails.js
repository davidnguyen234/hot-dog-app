import React from 'react';

function OrderDetails(props) {
    const style = {
        color: ' #333 ',
    }
    return (
        <span style={style}>
            <h2>Price: {props.price} | Date: {props.date}</h2>
        </span>
    );
}
export default OrderDetails;