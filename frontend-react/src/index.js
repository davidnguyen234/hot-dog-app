import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/OrderMain';
import Item from './components/Items';
import VendorNav from './components/VendorNav';
import OrderMain from './components/OrderMain'
// import Map from './components/Map';
ReactDOM.render(
  <React.StrictMode>
    <VendorNav />

  </React.StrictMode>,
  document.getElementById('root')
);

