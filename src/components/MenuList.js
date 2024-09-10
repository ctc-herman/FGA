// src/components/MenuList.js
import React, { useState, useEffect } from 'react';
import { fetchMenuItems } from '../api'; // Ensure correct API import

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]); // State to hold menu items
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const data = await fetchMenuItems(); // Fetching menu items from API
        setMenuItems(data.results); // Setting the menu items in state
        setLoading(false); // Turn off loading state
      } catch (err) {
        setError('Error fetching menu items'); // Set error if API call fails
        setLoading(false);
      }
    };

    loadMenuItems();
  }, []); // Empty dependency array means this runs only on component mount

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Menu List</h1>
      <ul>
        {menuItems.length > 0 ? (
          menuItems.map(item => (
            <li key={item.menu_id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))
        ) : (
          <p>No menu items found</p>
        )}
      </ul>
    </div>
  );
};

export default MenuList;
