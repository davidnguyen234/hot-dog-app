import React from 'react';

class ItemListItem extends React.Component {

    render() {
        const style = {
            width: '340px',
            border: '1px #AAA solid',
            padding: '10px',
            backgroundColor: '#FF0000'
        }
        if (this.props.activeItemId && (this.props.activeItemId === this.props.item.inventory_id)){
            style.backgroundColor = '#32CD32';
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