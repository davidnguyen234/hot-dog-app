import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function AddressDropDown(props) {
    const addressArray = props.addressList.map((addressArray) => {
        return (
            <Dropdown.Item
                key={addressArray.address_id}
                onClick={(e) => props.myClickHandler(e, addressArray.address_id)}
            >
                {"Address: " + addressArray.address_id}
                <br></br>
            </Dropdown.Item>
        );
    });
    return (
            <DropdownButton id="address-dropdown" title="Choose Address">
                {addressArray}
            </DropdownButton>
    );
}
export default AddressDropDown;