import React from 'react';
import Map from './Maps';
import Menu from './Menu/Menu';
import Vendor from './vendor/VendorNav';
import Admin from './Admin/Admin';
import '../css/Nav.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';


export default function Nav() {
    const nav_links_style = {
        color: 'blue'
    };
    return (
        <Router>
            <div className="vendor-nav">
                <ul className="nav-links">
                    <Link style={nav_links_style} to="/map">
                        <li>Map</li>
                    </Link>
                    <Link style={nav_links_style} to="/menu">
                        <li>Menu</li>
                    </Link>
                    <Link style={nav_links_style} to="/vendor">
                        <li>Vendor</li>
                    </Link>
                    <Link style={nav_links_style} to="/admin">
                        <li>Admin</li>
                    </Link>
                </ul>
            </div>
            <Switch>
                <Route path="/map" component={Map} exact />
                <Route path="/menu" component={Menu} exact />
                <Route path="/vendor" component={Vendor} exact />
                <Route path="/admin" component={Admin} exact />
            </Switch>
        </Router>
    );
}
