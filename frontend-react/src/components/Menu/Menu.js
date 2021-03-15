import React from 'react';
import Button from './Button';
import Axios from "axios";
import './menu.css';
class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuItems: [],
            vendorid: props.vendorid,
            checked: false,
            orderprice: 0,
            total: 0.0,
            quantity: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }



    componentDidMount() {
        this.getItems();

    }

    getItems() {
        Axios.get("http://localhost:9000/menu").then(res => {
            this.setState({ menuItems: [...res.data] });
        });
    }


    //CLICK HANDLER
    handleClick() {

        // this.setState(state => ({

        // }));
        // this.setState({ total: this.state.menuItems.inventory_price })
        // console.log(this.state.orderprice);
        this.setState({ total: this.state.total + parseFloat(this.state.menuItems.inventory_price) })
        console.log("click working...");

    }


    render() {
        return (

            <div className="menu">
                <ul className="list-group">
                    {this.state.menuItems.map(menuItem => (
                        <>
                            <div className="quantity-buttons">
                                <button className="increment">+</button>
                                <h1>{this.state.quantity}</h1>
                                <button className="decrement">-</button>
                            </div>
                            <li key={this.state.vendorid} className="menu-item" onClick={this.handleClick}>
                                {/* <input
                                type="checkbox"
                                defaultChecked={this.state.checked}
                                onClick={console.log("clicked check")}
                            ></input> */}

                                {menuItem.inventory_type + " $" + menuItem.inventory_price}
                                {/* {this.state.menuItem.inventory_id} */}

                            </li>
                        </>
                    ))}

                </ul>
                <h1 className="Total">Total: {this.state.total} </h1>

                <Button />


            </div >
        )
    }
};
export default Menu;
