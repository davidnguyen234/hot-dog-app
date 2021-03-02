import React from 'react';
import '../../css/items.css';
import ItemList from './ItemList';
import Axios from "axios";

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            vendorid: props.vendorid,
            isAvail: 1 // Green // WORKING PROGRESS
        }
    }

    componentDidMount() {
        this.getItem();
    }

    // Connects to backend. Adds all the vendor information to the itemList
    getItem() {
        Axios.get("http://localhost:9000/items/" + this.state.vendorid).then(res => {
            this.setState({ itemList: [...res.data] })
        });
    }

    // Connects to the backend and updates an existing table
    updateItem(activeItemId) {
        Axios.put("http://localhost:9000/items/" + this.state.vendorid, {
            "inventory_id": activeItemId,
            "inventory_avail": this.state.isAvail
        })
            .catch(err => { console.log(err) });
    }

    // Function to enure promise order is correct
    wait() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 1000);
        });
    }

    // [Eventhandler] retreves the ID of the selected item
    async selectActiveItem(e, activeItemId) {
        e.preventDefault();
        this.setState({ activeItemId });
        this.updateItem(activeItemId);
        await this.wait(); // Use to make sure the PUT finished before the new GET happens
        this.getItem();
    }

    render() {
        return (
            <div className='page'>
                <ItemList
                    vendorid={this.state.vendorid}
                    listOfItems={this.state.itemList}
                    activeItemId={this.state.activeItemId}
                    myClickHandler={this.selectActiveItem.bind(this)}
                />
            </div>
        );
    }
}
export default Items;