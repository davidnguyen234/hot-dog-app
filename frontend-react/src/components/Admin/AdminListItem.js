import React from 'react';
import Popup from 'reactjs-popup';

class AdminListItem extends React.Component {

    render() {
        return (
            <div id="inventoryList">
                Inventory:
                {this.props.list.map(item => (
                    <Popup
                        key={item.inventory_id}
                        trigger={<div id="InventoryItem" style={this.props.style}> {item.inventory_type} </div>}
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
export default AdminListItem;