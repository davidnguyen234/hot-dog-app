import React from 'react';
import MenuItem from './MenuItem';
import Axios from "axios";
import './menu.css';
// import QuantityButtons from './QuantityButtons';
class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            vendorid: props.vendorid,
            orderPrice: 0,
            orderItemsQuantity: []
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

    //CLICK HANDLERS
    handleClick(e, itemID, quantity, itemPrice) {
        let a = this.state.orderItemsQuantity.slice();
        a[itemID] = quantity; // clones the array and sets the new value in the given index
        this.setState({
            orderItemsQuantity: a,// Sets the original array to the values of the clone
            orderPrice: this.state.orderPrice + itemPrice
        })
    }

    checkout() {
        // update the "order" table
        Axios.post(`http://localhost:9000/menu/orders/${this.state.orderPrice}`);

        // update the "order_has_inventory" table
        for (var i = 1; i < this.state.orderItemsQuantity.length; i++) {
            if(this.state.orderItemsQuantity[i] !== undefined){
                Axios.post("http://localhost:9000/menu/orderin/"+ i + "/" + this.state.orderItemsQuantity[i]);
            }
        }
        alert("Order Placed");
    }

    render() {
        return (
            <div className="menu">
                {this.state.menuItems.map(menuItem => (<>
                    <MenuItem
                        name={menuItem.inventory_type}
                        price={menuItem.inventory_price}
                        itemId={menuItem.inventory_id}
                        myClickHandler={this.handleClick.bind(this)}
                    />
                </>
                ))}
                <h1 className="Total">Order Total: ${this.state.orderPrice} </h1>
                <button onClick={this.checkout.bind(this)} value="Checkout">
                    Checkout
                </button>
            </div >
        )
    }
};
export default Menu;
