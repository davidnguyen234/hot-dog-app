import React from 'react';
import AddressDropDown from './AddressDropDown';
// import Axios from "axios";

class Address extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {
            addressList: [],
            vendorId: 101 // defaults on vendor 101
        }
    }

    componentDidMount() {
        this.getItem();
    }

    // Connects to backend. Adds all the vendor information to the addressList
    getItem() {
        Axios.get("http://localhost:9000/address/" + this.state.vendorId).then(res => {
            this.setState({ addressList: [...res.data] })
        });
    }

    // Connects to the backend and updates an existing table
    updateItem(activeAddressId) {
        Axios.put("http://localhost:9000/address/" + this.state.vendorId, {
            "address_id": activeAddressId
        })
            .catch(err => { console.log(err) });
    }

    // grabs the vendor id from the selected Address
    selectAddress(e, vendorId) {
        e.preventDefault();
        this.setState({
            vendorId
        })
    }

    render() {
        return (
            <div>
                <AddressDropDown
                    addressList={this.state.addressList}
                    myClickHandler={this.selectAddress.bind(this)}
                />
            </div>
        );
    }
}
export default Address;