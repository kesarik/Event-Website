import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './eventdetails.css'; 
import Header from './header';

const events = {
  1: { 
    name: 'Tech Talk: AI in Everyday Life', 
    description: 'Join us for a discussion on the impact of Artificial Intelligence in our daily lives, exploring both opportunities and challenges.',
    date: '2024-10-12', 
    time: '10:00 AM - 12:00 PM', 
    location: 'I2IT Convention Centre' 
  },
  2: { 
    name: 'Blockchain Workshop', 
    description: 'A hands-on workshop to learn about blockchain technology, smart contracts, and how they are transforming industries.',
    date: '2024-10-18', 
    time: '1:00 PM - 4:00 PM', 
    location: 'I2IT Convention Centre' 
  },
  3: { 
    name: 'Cybersecurity Essentials', 
    description: 'Learn the fundamentals of cybersecurity, including best practices for protecting yourself and your organization from cyber threats.',
    date: '2024-10-25', 
    time: '10:00 AM - 1:00 PM', 
    location: 'I2IT Convention Centre' 
  },
  4: { 
    name: 'Hackathon 2024', 
    description: 'Participate in a 24-hour hackathon to create innovative solutions. Great prizes for the best projects!',
    date: '2024-11-20', 
    time: '10:00 AM - 10:00 AM (next day)', 
    location: 'I2IT Convention Centre' 
  },
  5: { 
    name: 'Web Development Bootcamp', 
    description: 'An intensive bootcamp covering HTML, CSS, JavaScript, and modern frameworks. Perfect for beginners and intermediates.',
    date: '2024-12-01', 
    time: '10:00 AM - 5:00 PM', 
    location: 'I2IT Convention Centre' 
  },
  6: { 
    name: 'Cloud Computing Fundamentals', 
    description: 'Gain insights into cloud computing concepts, services, and deployment models, and learn how to leverage cloud technologies for business efficiency.',
    date: '2024-12-15', 
    time: '10:00 AM - 12:00 PM', 
    location: 'I2IT Convention Centre' 
  },
  
};
const EventDetails = () => {
  const { eventId } = useParams();
  const event = events[eventId];
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleRegister = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div>
      <Header />
      <div className="event-details-container">
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <button className="register-button" onClick={handleRegister}>Register for Event</button>
      </div>
    </div>
  );
};

export default EventDetails;
