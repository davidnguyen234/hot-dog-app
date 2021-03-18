import React from 'react';
import Popup from 'reactjs-popup';

class AdminListVendor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: '',
            venPhone: ''
        };
    }

    // Eventhandlers that update the value of the text boxes
    handleChangeEmployee(e) {
        this.setState({
            empId: e.target.value
        });
    }
    handleChangeVendor(e) {
        this.setState({
            venPhone: e.target.value
        });
    }

    render() {
        return (
            <div id="vendorList">
                Vendor:
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
                                Employee ID:
                                <input
                                    type="text"
                                    value={this.state.empId}
                                    onChange={this.handleChangeEmployee.bind(this)}
                                />
                            </label>
                            <label>
                                Vendor Phone:
                                <input
                                    type="text"
                                    value={this.state.venPhone}
                                    onChange={this.handleChangeVendor.bind(this)}
                                />
                            </label>
                            <input
                                type="submit"
                                value="Submit"
                                onClick={(e) => this.props.myClickHandler(e, this.state.venPhone, this.state.empId)}
                            />
                        </form>
                    </div>
                </Popup>
                {/* mapping each item in the table to the list. Diplaying each item with a Popup feature */}
                {this.props.list.map(vendor => (
                    <Popup
                        key={vendor.vendor_id}
                        trigger={
                            <div id="InventoryItem" style={this.props.style}>
                                Vendor Id: {vendor.vendor_id}
                                <br />
                                Employee Id: {vendor.employee_id}
                            </div>
                        }
                        position="right top"
                        on="hover"
                        mouseLeaveDelay={300}
                        mouseEnterDelay={300}
                    >
                        <div id="inventoryOptions" style={this.props.style}>
                            <button>Delete</button>
                        </div>
                    </Popup>
                ))}
            </div>
        );
    }
}
export default AdminListVendor;
