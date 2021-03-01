import React from 'react';
import Map from './Map';
import Menu from './Menu';
import Items from './Items';
import Orders from './Orders';
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
                    <Link style={nav_links_style} to="/items">
                        <li>Items</li>
                    </Link>
                    <Link style={nav_links_style} to="/orders">
                        <li>Orders</li>
                    </Link>
                   
                </ul>
            </div>
            <Switch>
                <Route path="/map" component={Map} exact />
                <Route path="/menu" component={Menu} exact />
                <Route path="/items" component={Items} exact />
                <Route path="/orders" component={Orders} exact />
            </Switch>
        </Router>
    );
}
