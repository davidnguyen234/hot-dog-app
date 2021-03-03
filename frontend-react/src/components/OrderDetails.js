import React from 'react';
import { render } from "react-dom";
//import OrderListItem from './ItemListItem';

function OrderDetails(props) {
    const style={
        color: ' #333 ',
    }
    return (
        <span style={style}>
            <h2>Price: { this.props.order.order_price } |
             Date: { this.props.order.order_date_time }</h2> 
        </span>
     ) ;
}

export default OrderDetails; 