
import React from 'react';
import Popup from 'reactjs-popup';
import Button from '../Button';
import './menu.css';

//CLICK HANDLER
const handleClick = (e) => {
    e.preventDefault();
    console.log('This: ', e.target, 'was clicked!');
}

const Menu = () => (
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
                <div className="menu-item"> Brat</div>
                <div className="menu-item"> Sausage</div>
                <div className="menu-item"> ExtremeDog</div>
            </div>
        </Popup>
        <Button />
    </div>
);


export default Menu
