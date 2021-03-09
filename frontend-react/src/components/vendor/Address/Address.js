import React from 'react';
import AddressDropDown from './AddressDropDown';
import Axios from "axios";

class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addressList: [],
            vendorId: props.vendorid
            // ,currentAddress: []
        }
    }

    componentDidMount() {
        this.getAllAddress();
        this.getSingleAddress();
    }

    // Connects to backend. Adds all the address information to the addressList
    getAllAddress() {
        Axios.get("http://localhost:9000/address/").then(res => {
            this.setState({ addressList: [...res.data] })
        });
    }
    
    // // Connects to the backend and retreves the location of the given vendor
    // getVendorAddress(){
    //     Axios.get("http://localhost:9000/address/" + this.state.vendorId).then(res => {
    //         this.setState({ currentAddress: res.address_id })
    //     });
    // }

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
            <div className="page">
                <AddressDropDown
                    currentAddress={this.state.currentAddress}
                    vendorId={this.state.vendorId}
                    addressList={this.state.addressList}
                    myClickHandler={this.selectAddress.bind(this)}
                />
            </div>
        );
    }
}
export default Address;