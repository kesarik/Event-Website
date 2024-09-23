import React, { useState } from 'react';
import './signup.css';
import Header from './header';
const Signup = () => {
    
  const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('User signed up:', user);
  };

  return (
    <div>
      <Header/>
      <div className="signup-container">
     
     <h1>Sign Up</h1>
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="Username"
         value={user.username}
         onChange={(e) => setUser({ ...user, username: e.target.value })}
         required
       />
       <input
         type="email"
         placeholder="Email"
         value={user.email}
         onChange={(e) => setUser({ ...user, email: e.target.value })}
         required
       />
       <input
         type="password"
         placeholder="Password"
         value={user.password}
         onChange={(e) => setUser({ ...user, password: e.target.value })}
         required
       />
       <input
         type="password"
         placeholder="Confirm Password"
         value={user.confirmPassword}
         onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
         required
       />
       <button type="submit">Sign Up</button>
     </form>
   </div>
    </div>
    
  );
};

export default Signup;
