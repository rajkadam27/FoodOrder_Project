import axios from 'axios';

const API_URL = 'http://localhost:8080/api/orders';

const getOrders = () => {
  return axios.get(API_URL);
};

const updateOrderStatus = (orderId, status) => {
  return axios.put(`${API_URL}/${orderId}/status`, status, {
    headers: { "Content-Type": "application/json" },
  });
};


export default {
  getOrders,
  updateOrderStatus,
};
