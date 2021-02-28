import React from 'react';
import '../../css/items.css';
import ItemList from './ItemList';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        }
    }

    // Connects to the backend-express
    componentDidMount() {
        fetch("http://localhost:9000/items")
        .then((results) => {
            return results.json();
        }).then((items) => {
            this.setState({
                itemList: [...items] // state hold the array of all Items
            });
        });
    }

    // Eventhandler
    selectActiveItem(e, activeItemId) {
        e.preventDefault();
        console.log(activeItemId);// testing
        this.setState({
            activeItemId
        });
    }
    
    render() {
        return (
            <div className='page'>
                <ItemList
                    listOfItems={this.state.itemList}
                    activeItemId={this.state.activeItemId}
                    myClickHandler={this.selectActiveItem.bind(this)}
                />
            </div>
        );
    }
}
export default Items;