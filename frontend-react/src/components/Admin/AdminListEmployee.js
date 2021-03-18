import React from 'react';
import Popup from 'reactjs-popup';

class AdminListEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empFName: '',
            empLName: '',
            empPhone: ''
        };
    }

    // Eventhandlers that update the value of the text boxes
    handleChangeFirstName(e) {
        this.setState({
            empFName: e.target.value
        });
    }
    handleChangeLastName(e) {
        this.setState({
            empLName: e.target.value
        });
    }
    handleChangePhone(e) {
        this.setState({
            empPhone: e.target.value
        });
    }
    render() {
        return (
            <div id="EmployeeList">
                Employee:
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
                                First Name:
                                <input
                                    type="text"
                                    value={this.state.empFName}
                                    onChange={this.handleChangeFirstName.bind(this)}
                                />
                            </label>
                            <label>
                                Last Name:
                                <input
                                    type="text"
                                    value={this.state.empLName}
                                    onChange={this.handleChangeLastName.bind(this)}
                                />
                            </label>
                            <label>
                                Phone Number:
                                <input
                                    type="text"
                                    value={this.state.empPhone}
                                    onChange={this.handleChangePhone.bind(this)}
                                />
                            </label>
                            <input
                                type="submit"
                                value="Submit"
                                onClick={(e) => this.props.myClickHandler(e, this.state.empFName, this.state.empLName, this.state.empPhone)}
                            />
                        </form>
                    </div>
                </Popup>
                {/* mapping each item in the table to the list. Diplaying each item with a Popup feature */}
                {this.props.list.map(emp => (
                    <Popup
                        key={emp.employee_id}
                        trigger={
                            <div id="Employee" style={this.props.style}>
                                Id: {emp.employee_id}
                                <br />
                                Name: {emp.employee_first_name} {emp.employee_last_name}
                                <br />
                                Phone: {emp.employee_phone}
                            </div>}
                        position="right top"
                        on="hover"
                        mouseLeaveDelay={300}
                        mouseEnterDelay={300}
                    >
                        <div id="inventoryOptions" style={this.props.style}>
                            <button onClick={(e) => this.props.myDeleteHandler(e, `employee`, emp.employee_id)}>
                                Delete
                            </button>
                        </div>
                    </Popup>
                ))}
            </div>
        );
    }
}
export default AdminListEmployee;
