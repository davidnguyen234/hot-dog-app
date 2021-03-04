import React from 'react';
import ItemListItem from './ItemListItem';

function Itemlist(props) {
    const myItemlistArray = props.listOfItems.map((arrayItem) => {
        return <ItemListItem
                    key={arrayItem.inventory_id}
                    item={arrayItem}
                    activeItemId={props.activeItemId}
                    myClickHandler={props.myClickHandler}
                />
    });

    return (
        <div className="list">
            <h3>Select the items are currently available</h3>
            {myItemlistArray}
        </div>
    );
}
export default Itemlist;