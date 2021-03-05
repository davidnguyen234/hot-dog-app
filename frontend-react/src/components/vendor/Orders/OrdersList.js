import React from 'react';
import OrderListItem from './OrderListItem';

function OrdersList(props) {

    // array of order data
    const myOrderListItemArray = props.listOfOrders.map((orderLItem) => {
        return (
            < OrderListItem
                key={orderLItem.order_id}
                order={orderLItem}
                activeOrderId={props.activeOrderId}
                myClickHandler={props.myClickHandler}
                deleteHandler={props.deleteHandler}
            />
        )
    });

    // returning the array in a div
    return <div> {myOrderListItemArray} </div>;
}
export default OrdersList;