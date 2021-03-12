import React from 'react';
import Popup from 'reactjs-popup';

class AdminListOrders extends React.Component {

    render() {
        return (
            <div id="ordersList">
                Orders:
                {this.props.list.map(order => (
                    <Popup
                        key={order.orders_id}
                        trigger={<div id="orderItem" style={this.props.style}> {order.orders_id} </div>}
                        position="right top"
                        on="hover"
                        mouseLeaveDelay={300}
                        mouseEnterDelay={300}
                    >
                        <div id="inventoryOptions" style={this.props.style}>
                            [Edit] [Delete]
                        </div>
                    </Popup>
                ))}
            </div>
        );
    }
}
export default AdminListOrders;
