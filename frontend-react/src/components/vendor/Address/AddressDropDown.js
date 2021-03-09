import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function AddressDropDown(props) {
    const addressArray = props.addressList.map((addressArray) => {
        return (
            <Dropdown.Item
                key={addressArray.address_id}
                onClick={(e) => props.myClickHandler(e, addressArray.address_id)}
            >
                {"Location: " + addressArray.address_id}
                <br></br>
            </Dropdown.Item>
        );
    });
    return (
        <div className="address">
            <h4>Hello Vendor: {props.vendorId}</h4>
            <h3>Your current address is: {props.currentAddress}</h3>

            <DropdownButton id="address-dropdown" title="Choose Address">
                {addressArray}
            </DropdownButton>
        </div>
    );
}
export default AddressDropDown;