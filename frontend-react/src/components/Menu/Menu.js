import React from 'react';
import Button from './Button';
import MenuItem from './MenuItem';
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
                            {/* <QuantitySelector /> */}
                            <MenuItem name={menuItem.inventory_type} price={menuItem.inventory_price} />
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
