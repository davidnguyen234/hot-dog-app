
// import { FaTimes } from 'react-icons/fa'
// import { render } from '../../../backend-express/app';
// const Item = ({ order, onDelete}) => {
//     return (
//         <div className= 'order'>
//            <h3>
//                {order.name} <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(order.id)}/></h3> 
//            <p>{order.date}</p> 
//         </div>
//     )
// }
import React from 'react';

function OrderDetails(props) {
    return (
        <span>
            <h2>{props.name}</h2>
            <h2>{props.id}</h2>
            <h2>{props.phone}</h2>
            <h2>{props.email}</h2>
        </span>
    )
}
// }

// export default OrderDetails


// // export default Item
// function OrderDetails(props) {
//     render(

//     );
// }
export default OrderDetails; 