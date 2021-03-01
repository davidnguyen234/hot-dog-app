import React from 'react';

class ItemListItem extends React.Component {

    render() {
        const style = {
            width: '340px',
            border: '1px #AAA solid',
            padding: '10px',
            backgroundColor: '#FF0000' //RED
        }

        /* 
        * inventory_avail
        * 0 == false (does NOT have)
        * 1 == true (does have)
        */
        if(this.props.item.inventory_avail === 1){
            style.backgroundColor = '#32CD32'; // GREEN
        }
        return (
            <div style={style} onClick={(e) => this.props.myClickHandler(e, this.props.item.inventory_id)}>
                <h3>
                    {this.props.item.inventory_type}
                </h3>
            </div>);
    }
}
export default ItemListItem;