import React, { useState } from "react";
import './Itemlist.css';

function Itemlist() {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState({ name: '', category: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentItem({ ...currentItem, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isEditing) {
            const updateItems = [...items];
            updateItems[editingIndex] = currentItem;
            setItems(updateItems);
            setIsEditing(false);
            setEditingIndex(null);
        } else {
            setItems([...items, currentItem]);
        }
        setCurrentItem({ name: '', category: '' });
    };

    const handleDelete = (index) => {
        const filteredItems = items.filter((_, i) => i !== index);
        setItems(filteredItems);
    };

    const handleEdit = (index) => {
        setCurrentItem(items[index]);
        setIsEditing(true);
        setEditingIndex(index);
    };

    const handleItemClick = (event) => {
        event.stopPropagation();
        console.log('Item clicked:', event.target.textContent);
    };

    return (
        <div className="item-list-app">
            <h2>Item List</h2>
            <form onSubmit={handleSubmit} className="item-form">
                <input
                    type="text"
                    name="name"
                    value={currentItem.name}
                    placeholder="Item Name"
                    onChange={handleChange}
                    required
                />
                <select
                    name="category"
                    value={currentItem.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select category</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
                <button type="submit" className="submit-button">{isEditing ? 'Update' : 'Add'}</button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={handleItemClick} className="item">
                        <span className="item-text">{item.name} - {item.category}</span>
                        <div className="item-buttons">
                            <button onClick={(event) => {
                                event.stopPropagation();
                                handleEdit(index);
                            }} className="edit-button">Edit</button>
                            <button onClick={(event) => {
                                event.stopPropagation();
                                handleDelete(index);
                            }} className="delete-button">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Itemlist;