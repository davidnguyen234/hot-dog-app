import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/OrderMain';
import Item from './components/Items';
import VendorNav from './components/VendorNav';
import OrderMain from './components/OrderMain'
ReactDOM.render(
  <React.StrictMode>
    <OrderMain />

  </React.StrictMode>,
  document.getElementById('root')
);

