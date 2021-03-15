import React from 'react';

class OrderListItem extends React.Component {

    render() {
        const style = {
            width: '340px',
            border: '1px #AAA solid',
            padding: '10px',
            backgroundColor: '#FFFFFF' // RED
        }
        const btnStyle = {
                marginLeft: '350px',
                color: 'white',
                height: '40px',
                width: '100px',
                backgroundColor: '#da291c' 
        }
        if (this.props.activeOrderId && this.props.activeOrderId === this.props.order.orders_id) {
            style.backgroundColor = '#808080';
        }
        return (<div className='data' style={style} onClick={(e) =>
            this.props.myClickHandler(e, this.props.order.orders_id)} >
            <ul id="ords">
                <li>Order # :  {this.props.order.orders_id}
                    <button
                        onClick={(e) => this.props.deleteHandler(e, this.props.order.orders_id)}
                        style={btnStyle}
                        className='btn'>Complete
                    </button>
                </li>
            </ul>
        </div>
        );
    }
}
export default OrderListItem;