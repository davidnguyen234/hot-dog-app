import React from 'react';
import Axios from 'axios';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            vendorList: [],
            ordersList: [],
            addressList: []
        }
    }

    componentDidMount() {
        this.getItem();
        this.getVendor();
        this.getOrders();
        this.getAddress();
    }

    // GET CALLS //
    // Adds all the inventory items to the itemList
    getItem() {
        Axios.get("http://localhost:9000/items/").then(res => {
            this.setState({ itemList: [...res.data] })
        });
    }

    // Adds each vendor to the vendorList
    getVendor() {
        Axios.get("http://localhost:9000/vendor/").then(res => {
            this.setState({ vendorList: [...res.data] })
        });
    }

    // Adds every order to the orderList
    getOrders() {
        Axios.get("http://localhost:9000/orders/").then(res => {
            this.setState({ ordersList: [...res.data] })
        });
    }

    // Adds every address to the addressList
    getAddress() {
        Axios.get("http://localhost:9000/address/").then(res => {
            this.setState({ addressList: [...res.data] })
        });
    }





}
export default Admin;