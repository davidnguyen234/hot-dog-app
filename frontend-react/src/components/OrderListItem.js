import React, { Component } from 'react';
import Buttons from './Buttons' ;
// import Orders from './Orders';

class OrderListItem extends React.Component { 
    render() {
        return <div className='data'> 
           <ul id= "ords">
            <li>Order-id: {this.props.order.oredr_id}  
            <Buttons color='red' text='Complete' 
            // onClick={onClick}
            /> </li>
            <h4>employee-id {this.props.order.employee_id} </h4>  {/*date of order?*/}
            </ul> 
        </div>;
    }   
}
export default OrderListItem;