import React from "react";
import { Link } from "react-router-dom";
import "./HomePages.css";
import FoodMenu from "./FoodMenu";

function HomePage() {
  return (
    <div className="home-page">
     {/* Navbar */}
<nav className="navbar">
  <div className="navbar-container">
    <img 
      src="https://img.freepik.com/premium-vector/online-food-order-logo-icon_61778-45.jpg?semt=ais_hybridand" 
      alt="logo" 
      className="logo-img" 
    />
    <h1 className="logo-text">FoodOrder</h1>
    <ul className="nav-links">
      <li>
        <Link to="/user-login">User Login</Link>
      </li>
      {/* <li><Link to="/user-register">User Register</Link></li> */}
      <li>
        <Link to="/admin-login">Admin Login</Link>
      </li>
    </ul>
  </div>
</nav>


      {/* Hero Section with Food Products */}
      <section className="hero-section">
        <h2>Welcome to <span className="about-word-food">FoodOrder</span></h2>
        <p>
          Explore the best food delivery options and order your favorite meals!
        </p>
        <div className="food-gallery">
          <FoodMenu />
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section">
  <div className="about-container">
    <img 
      className="about-image" 
      src="https://img.freepik.com/premium-vector/delivery-food-logo-food-service-fast-delivery-creative-template-corporate-identity-restaurant-cafe-vector-illustration-isolated-white-background_178650-15419.jpg?w=740" 
      alt="Food Delivery"
    />
    <div className="about-text-container">
      <h2 className="about-heading">
        About <span className="about-word">Us</span>
      </h2>
      <p className="about-text">
        FoodOrder is committed to delivering the freshest and most delicious
        meals directly to your doorsteps. Whether you're craving a quick snack
        or a gourmet meal, we've got you covered. Our easy-to-use platform
        ensures that your food is just a few clicks away, and our fast
        delivery system guarantees you'll have your meal when you need it.
      </p>
    </div>
  </div>
</section>


      {/* Customer Reviews Section */}
      <section className="reviews-section">
  <h2 className="reviews-heading"><span>Customer Reviews</span></h2>
  <div className="reviews">
    <div className="review">
      <p>
        "FoodOrder has been a lifesaver! The food arrives hot and fresh
        every time. Highly recommended!"
      </p>
      <span>- John Doe</span>
    </div>
    <div className="review">
      <p>
        "The variety of meals and ease of ordering is fantastic. Will
        definitely order again!"
      </p>
      <span>- Jane Smith</span>
    </div>
  </div>
</section>


      {/* Contact Us Section */}
      <section className="contact-us-section">
  <h2 className="contact-heading">Contact Us</h2>
  <p>If you have any questions or need support, feel free to reach out to us.</p>
  <form className="contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 FoodOrder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
