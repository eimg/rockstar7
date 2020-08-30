import React, { useState, createRef } from 'react';

const Item = ({ name, price, remove, _id }) => {
    return (
        <li>
            {name}, ${price}
            <a href="#/" onClick={remove(_id)}>&times;</a>
        </li>
    );
}

const App = props => {

    const [fruits, setFruits] = useState([
        { _id: 1, name: 'Mango', price: 5.55 },
        { _id: 2, name: 'Banana', price: 3.55 },
        { _id: 3, name: 'Coconut', price: 2.55 },
    ]);

    const nameRef = createRef();
    const priceRef = createRef();
    const add = () => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const _id = fruits[fruits.length - 1]._id + 1;
        setFruits([ ...fruits, { _id, name, price } ]);
    }
    const remove = _id => () => {
        setFruits(fruits.filter(f => f._id !== _id));
    }

    return (
        <div>
            <h1>Functional</h1>
            <ul>
                {fruits.map(fruit => {
                    return (
                        <Item
                            key={fruit._id}
                            _id={fruit._id}
                            name={fruit.name}
                            price={fruit.price}
                            remove={remove}
                        />
                    )
                })}
            </ul>
            <input type="text" placeholder="Name" ref={nameRef} /><br />
            <input type="text" placeholder="Price" ref={priceRef} /><br />
            <button onClick={add}>ADD</button>
        </div>
    );
}

export default App;
