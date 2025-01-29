import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state for the login request
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      // Sending the login request
      const response = await axios.post(
        "http://localhost:8080/api/admin/login", // Update URL if needed
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Resetting loading state and handling response
      setIsLoading(false);
      
      if (response.status === 200 && response.data.role === "admin") {
        // Successful login with admin role
        setMessage("Login successful");
        setEmail("");
        setPassword("");

        // Store user information (e.g., token or role) if needed
        localStorage.setItem("userRole", "admin");

        // Navigate to admin dashboard or data page
        navigate("/admin-data");
      } else {
        setMessage("Unauthorized: You are not an admin.");
      }
    } catch (error) {
      // Handling login errors
      setIsLoading(false);
      if (error.response && error.response.status === 401) {
        setMessage("Invalid email or password");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="admin-login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Display login message */}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AdminLogin;
