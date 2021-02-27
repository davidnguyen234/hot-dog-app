import React from 'react';
import '../css/items.css';
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

    render() {
        return (
            <div className='page' style={{
                backgroundImage: 'url("https://st2.depositphotos.com/1063718/7492/v/950/depositphotos_74924201-stock-illustration-seamless-background-with-hot-dogs.jpg")'
            }}>
                <ItemList listOfItems={this.state.itemList} />
            </div>
        );
    }
}
export default Items;