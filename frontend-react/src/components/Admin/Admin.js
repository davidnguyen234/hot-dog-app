import React from 'react';
import Axios from 'axios';
import AdminListItem from './AdminListItem';
import AdminListVendor from './AdminListVendor';
import AdminListOrders from './AdminListOrders';
import AdminListAddress from './AdminListAddress';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            vendorList: [],
            ordersList: [],
            addressList: [],
            listStyle: {
                marginRight: '40px',
                width: '160px',
                border: '1px #AAA solid',
                padding: '10px',
                backgroundColor: '#FFFFFF' // WHITE
            },
            pageStyle: {
                display: 'flex',
                justifyContent: 'center',
                padding: '50px'

            }
        }
    }

    componentDidMount() {
        this.getTable("inventory");
        this.getTable("vendor");
        this.getTable("orders");
        this.getTable("address");
    }

    // GET CALLS //
    // Adds all the items from the given table name, and populates the respected list
    getTable(table) {
        Axios.get("http://localhost:9000/admin/" + table + "/").then(res => {
            switch (table) {
                case "inventory":
                    this.setState({ itemList: [...res.data] });
                    break;
                case "orders":
                    this.setState({ ordersList: [...res.data] })
                    break;
                case "vendor":
                    this.setState({ vendorList: [...res.data] })
                    break;
                default:
                    this.setState({ addressList: [...res.data] })
                    break;
            }
        });
    }

    // PUT CALLS //
    // adds a new vendor to the database with the given employee_id and vendor_phone
    addVendor(e, vendorPhone, vendorEmployeeId){
        e.preventDefault();
        console.log(vendorEmployeeId);
        console.log(vendorPhone);
        // Axios.post("").then(res => {
        // });
        alert("new Vendor Added");
    }

    render() {
        return (
            <div className="adminPage" style={this.state.pageStyle}>

                <AdminListItem
                    list={this.state.itemList}
                    style={this.state.listStyle}
                />
                <AdminListVendor
                    list={this.state.vendorList}
                    style={this.state.listStyle}
                    myClickHandler={this.addVendor.bind(this)}
                />
                <AdminListOrders
                    list={this.state.ordersList}
                    style={this.state.listStyle}
                />
                <AdminListAddress
                    list={this.state.addressList}
                    style={this.state.listStyle}
                />
            </div>
        );
    }
}
export default Admin;