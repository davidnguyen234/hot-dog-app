import React from 'react';
import '../../css/vendorNav.css';
import Orders from './../OrderMain';
import Items from './Items';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

function VendorNav() {
    const nav_links_style = {
        color: 'red'
    };

    return (
        <Router>
            <div className="vendor-nav">
                <h3> Vendor Page </h3>
                <ul className="nav-links">
                    <Link style={nav_links_style} to="/orders">
                        <li>Orders</li>
                    </Link>
                    <Link style={nav_links_style} to="/items">
                        <li>Items</li>
                    </Link>
                </ul>
            </div>
            <Switch>
                <Route path="/orders" component={Orders} exact />
                <Route path="/items" component={Items} exact />
            </Switch>
        </Router>
    );
}
export default VendorNav;