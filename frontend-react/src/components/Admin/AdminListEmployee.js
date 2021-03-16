import React from 'react';
import Popup from 'reactjs-popup';

class AdminListEmployee extends React.Component {

    render() {
        return (
            <div id="EmployeeList">
                Employee:
                {this.props.list.map(emp => (
                    <Popup
                        key={emp.employee_id}
                        trigger={
                            <div id="Employee" style={this.props.style}>
                                Id: {emp.employee_id}
                                <br/>
                                Name: {emp.employee_first_name} {emp.employee_last_name} 

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
export default AdminListEmployee;
