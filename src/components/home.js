import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Header from './header';

const Home = () => {
  return (
    <div>
       <Header />
      
      <header>
        <h1>Welcome to the Event Participation Portal</h1>
        <p>
          The solution connects students, colleges, and community events by tracking 
          participation and rewarding engagement with virtual credit points. It allows students 
          to register for and take part in events, earn credits, and receive recognition for 
          their contributions. This fosters enhanced engagement and acknowledges achievements, 
          building a vibrant community of active participants.
        </p>
      </header>

     
    </div>
  );
};

export default Home;
