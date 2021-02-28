import React from 'react';

let isAvailable = "Available: YES";
function changeAvailability() {
    console.log("click");
    isAvailable = "no";

}

class ItemListItem extends React.Component {
    // eventhandler


    render() {
        return (
            <div className="item">
                <div>
                    <h1 key={this.props.item.item_id}>
                        {this.props.item.inventory_type}
                    </h1>
                    <p> {isAvailable} </p>
                </div>
                <button onClick={changeAvailability}>Change Availability</button>
            </div>);
    }
}
export default ItemListItem;