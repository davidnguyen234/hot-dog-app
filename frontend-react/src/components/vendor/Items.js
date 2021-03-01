import React from 'react';
import '../../css/items.css';
import ItemList from './ItemList';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            vendorid: props.vendorid

        }
    }

    // Connects to backend. Adds all the vendor information to the itemList
    componentDidMount() {
        fetch("http://localhost:9000/items/" + this.state.vendorid) // NEED WORK!! Must re-mount everytime a dropdown is clicked
            .then((results) => {
                return results.json();
            }).then((items) => {
                this.setState({
                    itemList: [...items]
                });
            });
    }

    // [Eventhandler] retreves the ID of the selected item
    selectActiveItem(e, activeItemId) {
        e.preventDefault();
        this.setState({
            activeItemId
        });
        console.log("Click"); // testing only
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