// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

// Fetch Menu Items
export const fetchMenuItems = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/menu/search`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

// Add Menu Item
export const addMenuItem = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/menu`, data, {
      auth: {
        username: 'admin',
        password: 'password123'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding menu item:', error);
    throw error;
  }
};

// Delete Menu Item
export const deleteMenuItem = async (menu_id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/menu/${menu_id}`, {
      auth: {
        username: 'admin',
        password: 'password123'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting menu item:', error);
    throw error;
  }
};

// Get Cost of a Menu Item
export const getMenuCost = async (menu_id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cost/${menu_id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting menu cost:', error);
    throw error;
  }
};
