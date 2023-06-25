import { useState } from 'react';
import './Todolist.css'

function Todolist() {
    const [listItem, setListItem] = useState([]);
    const [listValue, setListValue] = useState('');

    function handleAdd() {
        setListItem([...listItem, listValue]);
        setListValue(''); // Clear the input field after adding a list item
    }

    function handleDelete(index) {
        const updatedList = listItem.filter((value, i) => i !== index);
        setListItem(updatedList);
    }

    console.log(listItem);

    return (
        <>
            <div className="list">
                <div className="list_container">
                    <ul>
                        {listItem.map((item, index) => (
                            <li key={index}>
                                {item} <button onClick={() => handleDelete(index)}>remove</button>
                            </li>
                        ))}
                    </ul>
                    <input
                        placeholder={'Please add your todo'}
                        type="text"
                        value={listValue} // Bind the input field to listValue state
                        onChange={(e) => {
                            setListValue(e.target.value);
                        }}
                    />
                    <button style={{display:'flex'}} onClick={handleAdd}>Add List</button>
                </div>
            </div>
        </>
    );
}

export default Todolist;
