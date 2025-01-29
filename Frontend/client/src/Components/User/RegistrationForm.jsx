import React, { useState } from 'react';
import UserService from '../Services/UserService';
import { useNavigate } from 'react-router-dom'; // For navigation after registration
import '../css/RegistrationForm.css'

const RegistrationForm = () => {
  const [name, setName] = useState('');
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
      const userData = { name, email, password };
      await UserService.createUser (userData); // Call the createUser  method
      setSuccess('Registration successful! Please log in.');
      navigate('/user-login'); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.message); // Set error message if registration fails
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;