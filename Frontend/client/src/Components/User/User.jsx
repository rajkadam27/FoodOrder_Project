import React, { useState, useEffect } from 'react';
import OrderService from '../Services/OrderService';
import AddOrder from './AddOrder'; 
import '../css/User.css';

const User = () => {
  const [orders, setOrders] = useState([]);
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [orderToEdit, setOrderToEdit] = useState(null); // Track the order being edited

  useEffect(() => {
    fetchOrders(); // Fetch orders when the component mounts
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await OrderService.getOrders();
      if (Array.isArray(response.data)) {
        setOrders(response.data); // Update orders after re-fetching
      } else {
        setOrders([]); // If not an array, reset to empty array
        console.error('Fetched data is not an array:', response.data);
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  const handleDelete = async (orderId) => {
    try {
      await OrderService.deleteOrder(orderId); // Delete the specific order
      fetchOrders(); // Refresh the orders list after deleting
      setSuccessMessage('Order deleted successfully'); // Success message
    } catch (err) {
      console.error('Error deleting order:', err);
      setSuccessMessage('Failed to delete order'); // Error message
    }
  };

  const handleEdit = (order) => {
    setOrderToEdit(order); // Set the order to be edited
    setShowAddOrder(true); // Show the AddOrder form to edit the order
  };

  return (
    <div>
      <h2>Your Orders</h2>
      <button onClick={() => setShowAddOrder(true)}>Add New Order</button>

      {showAddOrder && <AddOrder fetchOrders={fetchOrders} orderToEdit={orderToEdit} />}

      {successMessage && <div className="success-popup">{successMessage}</div>}

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.foodName}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
                <td>
                  <button onClick={() => handleEdit(order)}>Edit</button>
                  <button onClick={() => handleDelete(order.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
