import React from 'react';
import '../../css/vendorNav.css';
import Orders from './Orders/Orders';
import Items from './Items';
import Address from './Address/Address';
import VendorDropDown from './VendorDropDown';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

let itemId = 1; // ID for the item
let addressId = 1; // ID for the address component

class VendorNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vendorid: 101,
            vendorlist: []
        }
    }

    // Connects to backend. Adds all the vendor information to the vendorlist
    componentDidMount() {
        fetch("http://localhost:9000/vendor")
            .then((results) => {
                return results.json();
            }).then((vendors) => {
                this.setState({
                    vendorlist: [...vendors]
                });
            });
    }

    // [Eventhandler] retreves the ID of the selected vendor
    selectActiveVendor(e, vendorid) {
        e.preventDefault();
        this.setState({
            vendorid
        });
        itemId = Math.random(); //Changing the ID of the component forces the it to be remounted (if the url is correct)
        addressId = Math.random(); 
    }

    render() {
        const nav_links_style = {
            color: 'red',
        };
        return (
            < Router >
                <div className="vendor-nav">
                    <h3> Vendor Page </h3>
                    <VendorDropDown
                        listOfVendors={this.state.vendorlist}
                        vendorid={this.state.vendorid}
                        myClickHandler={this.selectActiveVendor.bind(this)}
                    />
                    <ul className="nav-links">
                        <Link style={nav_links_style} to="/orders">
                            <li>Orders</li>
                        </Link>
                        <Link style={nav_links_style} to="/items">
                            <li>Items</li>
                        </Link>
                        <Link style={nav_links_style} to="/address">
                            <li>Address</li>
                        </Link>
                    </ul>
                </div>
                <Switch>
                    <Route path="/orders" component={Orders} exact />
                    <Route
                        path={"/items"}
                        render={(props) => <Items {...props} key={itemId} vendorid={this.state.vendorid} />}
                        exact
                    />
                     <Route
                        path={"/address"}
                        render={(props) => <Address {...props} key={addressId} vendorid={this.state.vendorid} />}
                        exact
                    />
                </Switch>
            </Router >
        );
    }
}
export default VendorNav;