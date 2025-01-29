import React, { useEffect, useState } from "react";
import AdminService from "../Services/AdminService"; // Assuming you have an API service

const AdminData = () => {
  const [orders, setOrders] = useState([]); // Initialize with an empty array
  const [error, setError] = useState(null); // Handle errors
  const [message, setMessage] = useState(""); // Display success message

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await AdminService.getOrders(); // Fetch orders
        setOrders(response.data); // Assuming response.data contains the orders
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders. Please try again later."); // Set error message
      }
    };

    fetchOrders(); // Call the function to fetch orders
  }, []);

  const handleAccept = async (orderId) => {
    try {
      // Update the order status in the backend to 'accepted'
      await AdminService.updateOrderStatus(orderId, "accepted");

      // Update the order status in the state to reflect the change
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: "accepted" } : order
        )
      );

      // Show success message
      setMessage(`Order with ID ${orderId} has been accepted.`);
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    } catch (err) {
      console.error("Error updating order status:", err);
      setError("Failed to update order status. Please try again.");
    }
  };

  if (error) {
    return <div>{error}</div>; // Display error if it exists
  }

  if (!orders || orders.length === 0) {
    return <div>No orders found.</div>; // Display message if no orders exist
  }

  return (
    <div>
      <h1>Orders</h1>
      {message && <div style={{ color: "green", marginBottom: "10px" }}>{message}</div>}
      <table>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.foodName}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
              <td>
                {order.status === "pending" ? (
                  <button onClick={() => handleAccept(order.id)}>Accept</button>
                ) : (
                  <button disabled>Accepted</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminData;
