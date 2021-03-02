
import React from 'react';
import Popup from 'reactjs-popup';
import Button from './Button';

import './menu.css';

//CLICK HANDLER
const handleClick = (e) => {
    e.preventDefault();
    console.log('This: ', e.target, 'was clicked!');
}

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItems: [props.item, 'Item1', 'Item2', 'Item3']
            // items: this.props.items
        }
    }


    componentDidMount() {
        fetch("http://localhost:9000/menu")
            .then((results) => {
                return results.json();
            });
    }


    render() {


        return (
            <div className="menu">
                <Popup
                    trigger={<div className="menu-item"> HotDog Menu </div>}
                    position="right top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: '0px', border: 'none' }}
                    arrow={false}
                >

                    <div className="menu" onClick={handleClick}>
                        {/*TODO: generate dynamic menu-items from db/array */}
                        <ul className="list-group">
                            {this.state.menuItems.map(menuItem => (
                                <li key={menuItem} className="menu-item">
                                    {menuItem}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Popup>
                <Button />
            </div>
        )
    }


};


export default Menu
