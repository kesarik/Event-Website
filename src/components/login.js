import React, { useState } from 'react';
import './login.css'; 
import Header from './header';
const Login = () => {
  
  const [user, setUser] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('User logged in:', user);
  };

  return (
    <div>
      <Header/>
      <div className="login-container">
     
     <h1>Login</h1>
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="Username"
         value={user.username}
         onChange={(e) => setUser({ ...user, username: e.target.value })}
       />
       <input
         type="password"
         placeholder="Password"
         value={user.password}
         onChange={(e) => setUser({ ...user, password: e.target.value })}
       />
       <button type="submit">Login</button>
       <a href="/signup">Don't have an account? Sign Up</a>
     </form>
   </div>
    </div>
    
  );
};

export default Login;
