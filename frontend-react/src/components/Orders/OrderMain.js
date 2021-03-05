import React from 'react';
import Orders from './Orders';
import OrdersList from './OrdersList';
import OrderDetails from './OrderDetails';

class OrderMain extends React.Component {

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
        this.setState({
          ordersli: [...orders],
          areOrdersFetched: true
        });
      })
  }

  deleteHandler(e, activeOrderId) {
    e.preventDefault();
    const newOrderList = this.state.ordersli.filter((order) => {
      return order.order_id !== activeOrderId;
    });
    this.setState({
      ordersli: newOrderList
    });
    fetch(`http://localhost:9000/order/${activeOrderId}`, {
      method: 'POST'
    }).then((res) => {
      console.log(`Successfully marked order with orderId ${activeOrderId} as complete.`);
    }).catch((err) => {
      console.error(`Error while marking order with orderId: ${activeOrderId} as complete in DB.`);
    })
  }

  selectActiveOrder(e, activeOrderId) {
    e.preventDefault();
    console.log(activeOrderId);
    let activeOrder = this.state.ordersli.find((o) => o.order_id === activeOrderId);
    this.setState({
      activeOrderId,
      activeOrder
    });
  }

  render() {

    let myOrderList = this.state.areOrdersFetched
      ? <OrdersList
        listOfOrders={this.state.ordersli}
        activeOrderId={this.state.activeOrderId}
        myClickHandler={this.selectActiveOrder.bind(this)}
        deleteHandler={this.deleteHandler.bind(this)}
      />
      : <h2>Orders are loading!</h2>;

    let myOrderDetails = this.state.activeOrderId
      ? <OrderDetails
        price={this.state.activeOrder.order_price}
        date={this.state.activeOrder.order_date_time}
      />
      : <h4>Select an Order</h4>


    return (
      <div className='App'>
        <header className="App-header">
          <Orders />
          {myOrderList}
          {myOrderDetails}
        </header>
      </div>
    );
  }
}
export default OrderMain;