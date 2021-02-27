
import OrderListItem from './OrderListItem';
import Buttons from './Buttons' 
function OrdersList (props) {
    // array of order data
    const myOrderListItemArray = props.listOfOrders.map((orderLItem) => < OrderListItem order = {orderLItem} />);
    // const myOrderListItemArray = props.listOfOrders.map((orderLItem) => { return <div id={orderLItem.vendor_id}><OrderListItem order = {orderLItem} />  <Buttons color='red' text='Complete' onClick={() => { document.getElementById(orderLItem.vendor_id).style.visibility = "hidden"; markComplete(orderLItem.vendor_id)}} /></div>});
    // returning the array in a div
    return <div> { myOrderListItemArray } 
    </div>;  
}
export default OrdersList;
// let markComplete = (id) => { fetch(`http://localhost:3000/order/${id}/complete`)
//     .then((results) => {
//        console.info(`Order ${id} marked as complete.`); 
//       console.log(JSON.stringify(results));
//     }).then((myJson) => {
//       console.error("IN JSON promise resolution", myJson)
//     })
// }