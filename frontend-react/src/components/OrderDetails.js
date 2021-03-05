import React from 'react';
//import OrderMain from'./OrderMain';
//import OrderListItem from './ItemListItem';
function OrderDetails(props) {
    const style={
        color: ' #333 ',
    }
    return (
        <span style={style}>
            <h2>Price: {props.price} | Date: {props.date}</h2> 
        </span>
     ) ;
}
// }

// export default OrderDetails


// // export default Item
// function OrderDetails(props) {
//     render(

//     );
// }
export default OrderDetails; 