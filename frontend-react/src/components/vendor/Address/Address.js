import React from 'react';
import AddressDropDown from './AddressDropDown';
import Axios from "axios";

class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addressList: [],
            vendorId: props.vendorid
        }
    }

    componentDidMount() {
        this.getAllAddress();
        this.getCurrentVendorAddressId();
    }

    // Connects to backend and adds all the address information of each address to the addressList
    getAllAddress() {
        Axios.get("http://localhost:9000/address/").then(res => {
            this.setState({ addressList: [...res.data] })
        });
    }
    
    // Connects to the backend and retreves the address_id of the given vendor
    getCurrentVendorAddressId(){
        Axios.get("http://localhost:9000/vendor/" + this.state.vendorId).then(res => {
            this.setState({ activeAddressId: res.data[0].address_id  })
        });
    }


    // Connects to the backend and updates the address_id in the vendor table
    updateAddress(activeAddressId) {
        Axios.put("http://localhost:9000/vendor/" + this.state.vendorId, {
            "address_id": activeAddressId
        })
            .catch(err => { console.log(err) });
    }

    // Grabs the address id from the selected drop down item
    selectAddress(e, activeAddressId) {
        e.preventDefault();
        this.setState({
            activeAddressId
        })
        console.log(activeAddressId);
        this.updateAddress(activeAddressId);
    }

    render() {
        return (
            <div className="page">
                <div className="info">
                    <h4>Hello Vendor: {this.state.vendorId}</h4>
                    <h3>Your current address is: {this.state.activeAddressId}</h3>
                </div>
                <AddressDropDown
                    addressList={this.state.addressList}
                    myClickHandler={this.selectAddress.bind(this)}
                />
            </div>
        );
    }
}
export default Address;