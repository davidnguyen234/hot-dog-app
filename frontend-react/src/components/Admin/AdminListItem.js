import React from 'react';
import Popup from 'reactjs-popup';

class AdminListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            itemPrice: '',
            itemCost: ''
        };
    }
    handleChangeItemName(e) {
        this.setState({
            itemName: e.target.value
        });   
    }
    handleChangeItemPrice(e) {
        this.setState({
            itemPrice: e.target.value
        });
    }
    handleChangeItemCost(e) {
         this.setState({
             itemCost: e.target.value
         });
    }

    render() {
        return (
            <div id="inventoryList">
                Inventory:
                {/* Add button as Popup feature to allow adding new options to the database */}
                <Popup
                    trigger={
                        <button>
                            Add
                        </button>
                    }
                    position="right top"
                >
                    <div id="AddButton" style={this.props.style}>
                        <form>
                            <label>
                                New Item:
                                <input
                                    type="text"
                                    value={this.state.itemName}
                                     onChange={this.handleChangeItemName.bind(this)}
                                />
                            </label>
                            <label>
                                Item Price:
                                <input
                                    type="text"
                                    value={this.state.itemPrice}
                                     onChange={this.handleChangeItemPrice.bind(this)}
                                />
                            </label>
                            <label>
                                Item Cost:
                                <input
                                    type="text"
                                    value={this.state.itemCost}
                                     onChange={this.handleChangeItemCost.bind(this)}
                                />
                            </label>
                            <input
                                type="submit"
                                value="Submit"
                                onClick={(e) => this.props.myClickHandler(e, this.state.itemName, this.state.itemPrice, this.state.itemCost)}
                            />
                        </form>
                    </div>
                </Popup>
                    {this.props.list.map(item => (
                        <Popup
                            key={item.inventory_id}
                            trigger={
                                <div id="InventoryItem" style={this.props.style}>
                                    Name: {item.inventory_type} 
                                    <br/>
                                    Price: {item.inventory_price}
                                    <br/>
                                    Cost: {item.inventory_cost}
                                </div>}
                            position="right top"
                            on="hover"
                            mouseLeaveDelay={300}
                            mouseEnterDelay={300}
                        >
                            <div id="inventoryOptions" style={this.props.style}>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </Popup>
                    ))}
            </div>
        );
    }
}
export default AdminListItem;