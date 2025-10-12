

function List(props){

    const itemList=props.items;

const ListItems = itemList.filter(itemList => itemList.calories < 100);

const listItems = lowCalFruits.map(lowCalFruit => 
    <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b>
    </li>
);

return( <>
<h3>{category}</h3>
<ol>{listItems}</ol>;
</>);
}

export default List
