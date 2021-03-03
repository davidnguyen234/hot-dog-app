import React, { Component } from 'react';
import Buttons from './Buttons' ;
import OrderMain from'./OrderMain';
// import Orders from './Orders';
import '../css/Order.css';
import OrdersList from './OrdersList';

function DeleteOrder() {
 
    //handler here
    console.log("click");
}

class OrderListItem extends React.Component { 

    render() {
        const style={
             border : '1px #ffc72c solid',
             color: '#554'
        }
        if(this.props.activeOrderId && this.props.activeOrderId === this.props.order.order_id){
            style.color = '#da291c ';
        }
        return (<div className='data' style={style} onClick={(e) => 
        this.props.myClickHandler(e, this.props.order.order_id)} >
        <body>
           
           <ul id= "ords">
            <li>Order # :  {this.props.order.order_id}  
             <Buttons color='#da291c' text='Complete' 
             onClick={DeleteOrder}
            /> 
             </li>
             
            <p>customer # :  {this.props.order.cust_id} </p>  {/*date of order?*/}
            <p>-----------------------------------------------------------------------------------------------------</p>
            </ul> 
            </body>
        </div>);
    }   
}
export default OrderListItem;

