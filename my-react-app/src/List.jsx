

function List(){

    const fruits = [{name:"apple",calories:95},
                    {name:"orange",calories:90},
                    {name:"banana",calories:105},
                    {name:"coconut",calories:159},
                    {name:"mango",calories:95},];

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
                                <b>{fruit.calories}</b></li>);

    return(<ul>{listItems}</ul>);
}

export default List
