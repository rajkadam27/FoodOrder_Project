import axios from 'axios';

const API_URL = 'http://localhost:8080/api/orders'; 

// Get all orders
const getOrders = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    console.error('Error fetching orders:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Submit a new order
const submitOrder = async (orderData) => {
  try {
    const response = await axios.post(API_URL, orderData); // Using correct URL
    return response;
  } catch (error) {
    console.error('Error submitting order:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Update an existing order
const updateOrder = async (id, orderData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, orderData);
    return response; 
  } catch (error) {
    console.error('Error updating order:', error.response ? error.response.data : error.message);
    throw error; 
  }
};

// Delete an order
const deleteOrder = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    console.error('Error deleting order:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Add a new order (same as submitOrder method but can be kept separate if needed)
const addOrder = async (orderData) => {
  try {
    const response = await axios.post(API_URL, orderData);
    return response;
  } catch (error) {
    console.error('Error adding order:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default {
  getOrders,
  submitOrder,
  updateOrder,
  deleteOrder,
  addOrder,
};
