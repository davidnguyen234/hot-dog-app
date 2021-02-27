import ItemListItem from './ItemListItem';

function Itemlist(props) {
    const myItemlistArray = props.listOfItems.map((arrayItem) => <ItemListItem item={arrayItem} />);
    return (
        <div className="list">
           {myItemlistArray}
        </div>
    );
}
export default Itemlist;