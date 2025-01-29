import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationForm from './Components/User/RegistrationForm';
import LoginForm from './Components/User/LoginForm';
import User from './Components/User/User';
import AddOrder from './Components/User/AddOrder';
import AdminLogin from './Components/Admin/AdminLogin';
import Admindata from './Components/Admin/Admindata';
// Import Admin Component when ready
// import Admin from './Components/Admin/Admindata';

const isAuthenticated = true; // This is just a placeholder, you should replace it with actual authentication logic.

const PrivateRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/admin-login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/user-register" element={<RegistrationForm />} />
        <Route path="/user-login" element={<LoginForm />} />
        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-data" element={<Admindata/>} />

      </Routes>
    </Router>
  );
};

export default App;
