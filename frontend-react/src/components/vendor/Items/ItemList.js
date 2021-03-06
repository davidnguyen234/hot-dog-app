import React from 'react';
import ItemListItem from './ItemListItem';

function Itemlist(props) {
    let key = 0; // key for each item in the list
    const myItemlistArray = props.listOfItems.map((arrayItem) => {
        return <ItemListItem
            key={key++}
            item={arrayItem}
            activeItemId={props.activeItemId}
            isAvail={props.isAvail}
            myClickHandler={props.myClickHandler}
        />
    });

    return (
        <div className="list">
            <h4>Hello Vendor: {props.vendorid}</h4>
            <h3>Select the items are currently available</h3>
            {myItemlistArray}
        </div>
    );
}
export default Itemlist;