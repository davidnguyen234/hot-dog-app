import React from 'react';
import AddressDropDown from './AddressDropDown';
import Toggle from './Toggle';
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
    // also get if the vendor is on available
    getCurrentVendorAddressId() {
        Axios.get("http://localhost:9000/vendor/" + this.state.vendorId).then(res => {
            this.setState({ activeAddressId: res.data[0].address_id, vendorAvail: res.data[0].vendor_avail })
        });
    }


    // Connects to the backend and updates the address_id in the vendor table
    updateAddress(activeAddressId) {
        Axios.put("http://localhost:9000/vendor/" + this.state.vendorId, {
            "address_id": activeAddressId
        })
            .catch(err => { console.log(err) });
    }

    // Connects to the back end and updates the vendor_avail in the vendor table
    updateAvail(isAvail) {
        Axios.put("http://localhost:9000/vendor/" + this.state.vendorId + "/" + isAvail)
            .catch(err => { console.log(err) });
    }

    // EVENTHANDLERS
    // Grabs the address id from the selected drop down item
    selectAddress(e, activeAddressId) {
        e.preventDefault();
        this.setState({
            activeAddressId
        })
        this.updateAddress(activeAddressId);
    }

    // Eventhandler to toggle the vendor open or close
    async toggleAvil(e) {
        e.preventDefault();
        let isAvail;
        // toggle the avalibility
        if (this.state.vendorAvail === 1) {
            isAvail = 0;
        } else {
            isAvail = 1;
        }
        this.updateAvail(isAvail);
        await this.wait(); // Use to make sure the PUT finished before the new GET happens
        this.getAllAddress();
        this.getCurrentVendorAddressId();
    }

    // Function to enure promise order is correct (PUT before GET)
    wait() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 1000);
        });
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
                <Toggle
                    vendorAvail={this.state.vendorAvail}
                    myClickHandler={this.toggleAvil.bind(this)}
                />
            </div>
        );
    }
}
export default Address;