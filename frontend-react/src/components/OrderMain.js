// import OrderListItem from './OrderListItem';
import OrderDetails from './OrderDetails';
import OrdersList from './OrdersList';
// import './App.css';
import React, { Component } from 'react';
// import { render } from "react-dom";
import Orders from './Orders';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route } from 'react-router';
import { useState } from 'react';


class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      areOrdersFetched: false
      
    }
  }
  componentDidMount() {
 fetch("http://localhost:9000/order")
      .then((results) => {
        return results.json();
      }).then((orders) => {
      //  console.log("IN JSON promise resolution", myJson);
        this.setState({
          ordersli: [...orders],
          areOrdersFetched: true
        });
      })
  }
  
  selectActiveOrder(e, activeOrderId) {
    
    e.preventDefault();
    // console.log(activeOrderId);
    let activeOrder = this.state.orders.find((o) => o.id === activeOrderId);
    this.setState({
      activeOrderId,
      
      activeOrder
      
    });
    //console.log(activeOrderId);

  }
  render() {

    let myOrderList = this.state.areOrdersFetched
      ? <OrdersList listOfOrders={this.state.ordersli} 
                    activeOrderId={this.state.activeOrderId} 
                    myClickHandler={this.selectActiveOrder.bind(this)}
      //onClick={DeleteOrder}
      />
      : <h2>Orders are loading!</h2>;

      
////////???????????????????????????????????????????????/////////////////////
    let myOrderDetails = this.state.activeOrder
      ? <OrderDetails price={ this.state.activeOrder.order_price } 
                      time={ this.state.activeOrder.order_date_time }/>
      : <h4>Select an Order</h4>


    return (
      <div className='App'>
        <header className="App-header">
          <Orders />

          {myOrderList}
          {/* {OrderListItem} */}
          {myOrderDetails}
        </header>
      </div>
    );

  }
}
export default App;
