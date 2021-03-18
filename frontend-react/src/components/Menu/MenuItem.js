import React from 'react';
import './menuItem.css';


import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCount: 0
        }
    }


    increment() {
        this.setState({
            itemCount: this.state.itemCount + 1
        });
    }

    decrement() {
        this.setState({
            itemCount: this.state.itemCount - 1
        });

    }

    render() {
        return (
            <>
                <div className='quantity'>
                    <div className="items">
                        <h3 className='item_name'>{this.props.name + "  -- " + this.props.price}</h3>
                    </div>
                    <button
                        onClick={(e) => {
                            this.increment();
                            this.props.myClickHandler(e, this.props.itemId, this.state.itemCount + 1, this.props.price);
                        }}
                    >
                        <FaArrowAltCircleUp />
                    </button>
                    <button
                        onClick={(e) => {
                            this.decrement();
                            this.props.myClickHandler(e, this.props.itemId, this.state.itemCount - 1, (this.props.price * -1));
                        }}
                    >
                        <FaArrowAltCircleDown />
                    </button>
                    <div className="itemAmount">
                        {this.state.itemCount}
                    </div>
                </div>
            </>
        )
    }
}

export default MenuItem
