
import Item from './Item';
import { useState } from 'react';

const Orders = ({ ListOfOrders, onDelete }) => {
    const [orderz, setTasks] = useState(orders)
    return (

        <>
            {ListOfOrders.map((order) => (
                <Item key={order.id} name={order.name} onDelete={onDelete} />
            ))}
        </>
    )
}
