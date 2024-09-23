import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Optional: If you want a link back to the events
import Header from './header'; // Make sure to import the Header component
import './register.css';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your registration logic, like API calls
    console.log('User registered:', user);
    // Reset the form after submission if needed
    setUser({ username: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div>
        <Header /> {/* Add the Header component here */}
        <div className="register-container">
      
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
    
  );
};

export default Register;
