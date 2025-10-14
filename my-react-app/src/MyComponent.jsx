import React, {useState} from 'react';
function MyComponent(){
    const[name,setName] = useState("");
    const[quantity,setQuantity]=useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleNumberChange(event){
        setQuantity(event.target.value);
    }
 
    return (<div>
        <h3>MyComponents</h3>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>
        <input number={quantity} onChange={handleNumberChange} type="number"/>
        <p>quantity: {quantity}</p>

    </div>);
}

export default MyComponent