
import OrderDetails from './components/OrderDetails';
import OrdersList from './components/OrdersList';
import './App.css';
import React, { Component } from 'react';
import { render } from "react-dom";
import Orders from './components/Orders';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route } from 'react-router';
import { useState } from 'react';


class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      areOrdersFetched: false
      //,
      //  activeOrder:{}
    }
  }
  componentDidMount() {
    let myTestDataAPi = fetch("http://localhost:9000/vendor")
      .then((results) => {
        return results.json();
      }).then((myJson) => {
        console.log("IN JSON promise resolution", myJson);
        this.setState({
          orders: myJson,
          areOrdersFetched: true
        });
      })
  }
  render() {
    ///////////////////////////////////////////////////////////////////
    // const DeleteOrder = (props) =>  {
    //   OrdersList.filter((order) => order.vendor_id!== props );
    //   console.log('deleted');
    // } 
    //////////////////////////////////////////////////////////////////

    let myOrderList = this.state.areOrdersFetched
      ? <OrdersList listOfOrders={this.state.orders}
      //onDelete={onClick}
      />
      : <h2>Orders are loading!</h2>
    let myOrderDetails = !!this.state.activeOrder
      ? <OrderDetails AddressId={this.state.activeOrder.address_id} />
      : <h4>Select an Order</h4>

    return (
      <div className='App'>
        <header className="App-header">
          <Orders />

          {myOrderList}
          {/* <OrderListItem/> */}
          {myOrderDetails}
        </header>
      </div>
    );

  }
}
export default App;
