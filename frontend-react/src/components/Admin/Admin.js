import React from 'react';
import Axios from 'axios';
import Popup from 'reactjs-popup';

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

    render() {
        return (
            <div className="adminPage">

                <div id="inventoryList">
                    Inventory:
                    {this.state.itemList.map(item => (
                    <Popup
                        trigger={<div id="InventoryItem"> {item.inventory_type} </div>}
                        on="hover"
                        mouseLeaveDelay={300}
                        mouseEnterDelay={300}
                    >
                        <div id="inventoryOptions">
                            Options: [Edit] [Delete]
                        </div>
                    </Popup>
                ))}
                </div>

                <div id="ordersList">
                    Orders:
                    {this.state.ordersList.map(order => (
                    <Popup
                        trigger={<div id="orderItem"> {order.orders_id} </div>}
                        on="hover"
                        mouseLeaveDelay={300}
                        mouseEnterDelay={300}
                    >
                        <div id="orderOptions">
                            Options: [Edit] [Delete]
                        </div>
                    </Popup>
                ))}
                </div>

                <div id="vendorList">
                    Vendors:
                    {this.state.vendorList.map(vendor => (
                    <Popup
                        trigger={<div id="orderItem"> {vendor.vendor_id} </div>}
                        on="hover"
                        mouseLeaveDelay={300}
                        mouseEnterDelay={300}
                    >
                        <div id="orderOptions">
                            Options: [Edit] [Delete]
                        </div>
                    </Popup>
                ))}
                </div>

                <div id="addressList">
                    Addresses:
                    {this.state.addressList.map(address => (
                    <Popup
                        trigger={<div id="orderItem"> {address.address_id} </div>}
                        on="hover"
                        mouseLeaveDelay={300}
                        mouseEnterDelay={300}
                    >
                        <div id="orderOptions">
                            Options: Not avalible
                        </div>
                    </Popup>
                ))}
                </div>
            </div>
        );
    }
}
export default Admin;