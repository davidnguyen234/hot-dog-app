import React from 'react';
import OrdersList from './OrdersList';
import OrderDetails from './OrderDetails';

class OrderMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      areOrdersFetched: false,
      vendorId: props.vendorid,
    }
  }

  componentDidMount() {
    fetch("http://localhost:9000/order/vendor/" + this.state.vendorId)
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
      return order.orders_id !== activeOrderId;
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
    let activeOrder = this.state.ordersli.find((o) => o.orders_id === activeOrderId);
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
      : <h2>Loading...</h2>;

    let myOrderDetails = this.state.activeOrderId
      ? <OrderDetails
        price={this.state.activeOrder.orders_price}
        date={this.state.activeOrder.orders_date_time}
      />
      : <h2>Select an Order to see the details if there is any Order</h2>

    return (
      <div className='page'>
        <div id='inner'>
          <h2> Order list for: {this.state.vendorId}</h2>
          {myOrderList}
          {myOrderDetails}
        </div>
      </div>
    );
  }
}
export default OrderMain;