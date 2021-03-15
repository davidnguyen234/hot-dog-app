import React from 'react';
import Popup from 'reactjs-popup';

class AdminListVendor extends React.Component {

    render() {
        return (
            <div id="vendorList">
                Vendor:
                {this.props.list.map(vendor => (
                    <Popup
                        key={vendor.vendor_id}
                        trigger={
                            <div id="InventoryItem" style={this.props.style}>
                                Vendor Id: {vendor.vendor_id}
                                <br />
                                Employee Id: {vendor.employee_id}
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
        );
    }
}
export default AdminListVendor;