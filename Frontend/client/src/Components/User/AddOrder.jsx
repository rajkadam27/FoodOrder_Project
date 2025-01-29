import React, { useState, useEffect } from 'react';
import OrderService from '../Services/OrderService';
import '../css/AddOrder.css';

const AddOrder = ({ fetchOrders, orderToEdit = null }) => {
  const [foodName, setFoodName] = useState(orderToEdit ? orderToEdit.foodName : '');
  const [quantity, setQuantity] = useState(orderToEdit ? orderToEdit.quantity : '');
  const [status, setStatus] = useState(orderToEdit ? orderToEdit.status : 'pending');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (orderToEdit) {
      setFoodName(orderToEdit.foodName);
      setQuantity(orderToEdit.quantity);
      setStatus(orderToEdit.status);
    }
  }, [orderToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const orderData = { foodName, quantity, status };
      
      // If editing an order, call update; else create a new one
      if (orderToEdit) {
        await OrderService.updateOrder(orderToEdit.id, orderData); // Edit existing order
      } else {
        await OrderService.submitOrder(orderData); // Create new order
      }

      fetchOrders(); // Refresh the orders list
      setSuccess('Order submitted successfully!');
      setFoodName('');
      setQuantity('');
      setStatus('pending');
    } catch (err) {
      setError('An error occurred while saving the order.');
    }
  };

  return (
    <div>
      <h3>{orderToEdit ? 'Edit Order' : 'Add New Order'}</h3>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
        <button type="submit">{orderToEdit ? 'Update Order' : 'Submit Order'}</button>
      </form>
    </div>
  );
};

export default AddOrder;
