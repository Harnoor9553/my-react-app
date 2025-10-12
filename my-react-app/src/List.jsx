

function List(props){

    const itemList=props.items;
const category = props.category;

const lowCalFruits = itemList.filter(item => item.calories < 100);

const listItems = lowCalFruits.map(fruit => (
  <li key={fruit.id}>
    {fruit.name}: &nbsp;
    <b>{fruit.calories}</b>
  </li>
));


return( <>
<h3>{category}</h3>
<ol>{listItems}</ol>
</>);
}

export default List
