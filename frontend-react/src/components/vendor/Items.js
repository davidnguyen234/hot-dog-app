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
    updateItem(activeItemId, isAvail) {
        Axios.put("http://localhost:9000/items/" + this.state.vendorid, {
            "inventory_id": activeItemId,
            "inventory_avail": isAvail
        })
            .catch(err => { console.log(err) });
    }

    // Function to enure promise order is correct (PUT before GET)
    wait() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 1000);
        });
    }

    /* 
     * [Eventhandler] retreves the current item id and item availability
     * The availability is the switched and a PUT route is called to edit the databse
     * Finally the GET function is called to re-mount/render the component
     */
    async selectActiveItem(e, activeItemId, isAvail) {
        e.preventDefault();
        // toggle the avalibility
        if (isAvail === 1) {
            isAvail = 0;
        } else {
            isAvail = 1;
        }
        this.updateItem(activeItemId, isAvail);
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
                    isAvail={this.state.isAvail}
                    myClickHandler={this.selectActiveItem.bind(this)}
                />
            </div>
        );
    }
}
export default Items;