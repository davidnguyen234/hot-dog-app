import React from 'react';
import Popup from 'reactjs-popup';

class AdminListItem extends React.Component {

    render() {
        return (
            <div id="inventoryList">
                Inventory:
                <div>
                    {this.props.list.map(item => (
                        <Popup
                            key={item.inventory_id}
                            trigger={
                                <div id="InventoryItem" style={this.props.style}>
                                    Name: {item.inventory_type} 
                                    <br/>
                                    Price: {item.inventory_price}
                                    <br/>
                                    Cost: {item.inventory_cost}
                                </div>}
                            position="right top"
                            on="hover"
                            mouseLeaveDelay={300}
                            mouseEnterDelay={300}
                        >
                            <div id="inventoryOptions" style={this.props.style}>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </Popup>
                    ))}
                </div>
            </div>
        );
    }
}
export default AdminListItem;