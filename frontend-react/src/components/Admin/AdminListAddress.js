import React from 'react';
import Popup from 'reactjs-popup';

class AdminListAddress extends React.Component {

    render() {
        return (
            <div id="addressList">
                Address:
                {this.props.list.map(address => (
                    <Popup
                        key={address.address_id}
                        trigger={
                            <div id="orderItem" style={this.props.style}>
                                Address Id: {address.address_id}
                                <br/>
                                Longitude: {address.address_longitude}
                                <br/>
                                Latitude: {address.address_latitude}
                            </div>}
                        position="right top"
                        on="hover"
                        mouseLeaveDelay={300}
                        mouseEnterDelay={300}
                    >
                        <div id="inventoryOptions" style={this.props.style}>
                            No options
                        </div>
                    </Popup>
                ))}
            </div>
        );
    }
}
export default AdminListAddress;
