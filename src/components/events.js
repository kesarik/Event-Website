import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

import './events.css';

const events = [
  { id: 1, name: 'AI in Everyday Life', date: '2024-10-12', location: 'I2IT Convention Centre' },
  { id: 2, name: 'Blockchain Workshop', date: '2024-10-18', location: 'I2IT Convention Centre' },
  { id: 3, name: 'Cybersecurity Essentials', date: '2024-11-05', location: 'I2IT Convention Centre' },
  { id: 4, name: 'Hackathon 2024', date: '2024-11-20', location: 'I2IT Convention Centre' },
  { id: 5, name: 'Web Development Bootcamp', date: '2024-12-01', location: 'I2IT Convention Centre' },
  { id: 6, name: 'Cloud Computing Fundamentals', date: '2024-12-15', location: 'I2IT Convention Centre' }
];

const EventCard = ({ event }) => {
    return (
      <div className="event-card">
        <h2>{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <div className="button-container">
          <Link to={`/event/${event.id}`}>
            <button className="interested-button">Interested</button>
          </Link>
          <button className="not-interested-button">Not Interested</button>
        </div>
      </div>
    );
  };
const Events = () => {
  return (
    <div>
      <Header />
      <h1 className="events-title">Upcoming Events</h1>
      <div className="event-cards">
        {events.map(event => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  );
};

export default Events;
