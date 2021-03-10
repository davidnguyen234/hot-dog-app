import React from 'react';
import OrderListItem from './OrderListItem';

function OrdersList(props) {
    // array of order data
    const myOrderListItemArray = props.listOfOrders.map((orderLItem) => {

        return (
            <div key={orderLItem.order_id}>
                < OrderListItem
                    order={orderLItem}
                    activeOrderId={props.activeOrderId}
                    myClickHandler={props.myClickHandler}
                    deleteHandler={props.deleteHandler}
                />
            </div>
        )
    });

    // returning the array in a div
    return (
        <div>
            {myOrderListItemArray}
        </div>
    );
}
export default OrdersList;
