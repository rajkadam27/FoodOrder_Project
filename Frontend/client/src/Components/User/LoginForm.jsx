import React, { useState } from 'react';
import UserService from '../Services/UserService';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/LoginForm.css'
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const userData = { email, password };
      const user = await UserService.loginUser(userData);
      setSuccess('Login successful!'); // Handle successful login
      console.log('User data:', user); // You can store user data or token as needed
      navigate('/user'); // Redirect to home page after successful login
    } catch (err) {
      setError(err.message); // Set error message if login fails
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <p>
        Don't have an account?{' '}
        <Link to="/user-register">Register here</Link>
      </p>
    </form>
  );
};

export default LoginForm;
