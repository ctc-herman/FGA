// src/components/AddMenuItem.js
import React, { useState } from 'react';
import { addMenuItem } from '../api';

const AddMenuItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState([{ ingredient: '', cost: '', quantity: '' }]);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { ingredient: '', cost: '', quantity: '' }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, price, ingredients };
    try {
      await addMenuItem(data);
      alert('Menu item added successfully');
    } catch (error) {
      console.error("Error adding menu item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Menu Item</h2>
      <input
        type="text"
        value={name}
        placeholder="Item Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            value={ingredient.ingredient}
            placeholder="Ingredient"
            onChange={(e) => {
              const newIngredients = [...ingredients];
              newIngredients[index].ingredient = e.target.value;
              setIngredients(newIngredients);
            }}
          />
          <input
            type="number"
            value={ingredient.cost}
            placeholder="Cost"
            onChange={(e) => {
              const newIngredients = [...ingredients];
              newIngredients[index].cost = e.target.value;
              setIngredients(newIngredients);
            }}
          />
          <input
            type="number"
            value={ingredient.quantity}
            placeholder="Quantity"
            onChange={(e) => {
              const newIngredients = [...ingredients];
              newIngredients[index].quantity = e.target.value;
              setIngredients(newIngredients);
            }}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
      <button type="submit">Add Menu Item</button>
    </form>
  );
};

export default AddMenuItem;
