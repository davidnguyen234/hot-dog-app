import React from 'react';

class OrderListItem extends React.Component {

    render() {
        const style = {
            width: '340px',
            height: '40px',
            border: '1px #AAA solid',
            backgroundColor: '#FFFFFF', // RED
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }
        if (this.props.activeOrderId && this.props.activeOrderId === this.props.order.orders_id) {
            style.backgroundColor = '#808080';
        }
        return (
            <div style={{display:'flex'}}>
                <div className='order' style={style} onClick={(e) => this.props.myClickHandler(e, this.props.order.orders_id)} >
                    Order # : {this.props.order.orders_id}
                </div>
                <button
                    className='btn'
                    onClick={(e) => this.props.deleteHandler(e, this.props.order.orders_id)}
                >
                    Complete
             </button>
            </div>
        );
    }
}
export default OrderListItem;