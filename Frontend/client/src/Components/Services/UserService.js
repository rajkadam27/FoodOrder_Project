import axios from 'axios';
const API_URL = 'http://localhost:8080/api/user'; 

// Register a new user
const createUser  = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData); 
    return response.data; 
  } catch (error) {
    console.error('Registration error:', error);
    throw new Error('Registration failed. Please try again.');
  }
};


const loginUser  = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData); 
    return response.data; 
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Login failed. Please check your credentials.');
  }
};


export default {
  createUser ,
  loginUser ,
};

