import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function VendorDropDown(props) {
    const vendorIdArray = props.listOfVendors.map((vendorIdArray) => {
        return (
            <Dropdown.Item
                key={vendorIdArray.vendor_id}
                vendorid={vendorIdArray.vendor_id}
                onClick={(e) => props.myClickHandler(e, vendorIdArray.vendor_id)}
            >
                {vendorIdArray.vendor_id}
            </Dropdown.Item>
        )
    });
    return (
        <DropdownButton id="dropdown-basic-button" title="Choose Vendor">
            {vendorIdArray}
        </DropdownButton>
    );
}
export default VendorDropDown;