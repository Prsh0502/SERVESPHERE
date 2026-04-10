import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ExploreEvents.css';

const MOCK_EVENTS = [
  {
    id: 1,
    title: 'Mumbai Coastal Cleanup',
    org: 'Sagar Mitra Abhiyan',
    category: 'Environment',
    date: 'April 15, 2026',
    location: 'Juhu Beach, Mumbai',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80fca73?auto=format&fit=crop&q=80&w=800',
    hours: 4
  },
  {
    id: 2,
    title: 'Bangalore Tech Mentorship for Kids',
    org: 'Shiksha Foundation',
    category: 'Education',
    date: 'April 20, 2026',
    location: 'Koramangala, Bangalore',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
    hours: 3
  },
  {
    id: 3,
    title: 'Delhi Winter Clothes Drive',
    org: 'Goonj',
    category: 'Relief',
    date: 'April 22, 2026',
    location: 'Connaught Place, New Delhi',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    hours: 5
  },
  {
    id: 4,
    title: 'Chennai Flood Relief Distribution',
    org: 'Bhoomi NGO',
    category: 'Disaster Relief',
    date: 'April 25, 2026',
    location: 'T. Nagar, Chennai',
    image: 'https://images.unsplash.com/photo-1593113598332-cd28822002cd?auto=format&fit=crop&q=80&w=800',
    hours: 6
  },
  {
    id: 5,
    title: 'Pune Heritage Walk & Clean',
    org: 'Pune Heritage Group',
    category: 'Community',
    date: 'May 2, 2026',
    location: 'Shaniwar Wada, Pune',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800',
    hours: 3
  },
  {
    id: 6,
    title: 'Hyderabad Tree Plantation',
    org: 'Green India Initiative',
    category: 'Environment',
    date: 'May 5, 2026',
    location: 'Hitec City, Hyderabad',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    hours: 4
  }
];

const ExploreEvents = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [toastMessage, setToastMessage] = useState('');

  const filters = ['All', 'Environment', 'Education', 'Relief', 'Community'];

  const filteredEvents = activeFilter === 'All' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(e => e.category === activeFilter);

  const handleEnroll = (title) => {
    setToastMessage(`Successfully enrolled in ${title}!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="explore-page">
      <nav className="explore-nav">
        <Link to="/" className="explore-logo">ServeSphere</Link>
        <div className="explore-actions">
          <Link to="/login" style={{fontWeight: 600}}>Login</Link>
          <Link to="/login"><button className="filter-btn active">Join Now</button></Link>
        </div>
      </nav>

      <div className="explore-header">
        <h1 className="explore-title">Discover Opportunities</h1>
        <p className="explore-subtitle">Find local events where your skills and passion can make a real difference across India.</p>
        
        <div className="explore-filters">
          {filters.map(f => (
            <button 
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="explore-content">
        <div className="events-grid">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-body">
                <span className="event-tag">{event.category}</span>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-org">{event.org}</div>
                
                <div className="event-details">
                  <div className="event-detail-item">
                    <span className="material-symbols-outlined">calendar_today</span>
                    {event.date}
                  </div>
                  <div className="event-detail-item">
                    <span className="material-symbols-outlined">location_on</span>
                    {event.location}
                  </div>
                  <div className="event-detail-item">
                    <span className="material-symbols-outlined">schedule</span>
                    {event.hours} Hours
                  </div>
                </div>

                <button 
                  className="btn-enroll"
                  onClick={() => handleEnroll(event.title)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {toastMessage && (
        <div className="toast">
          <span className="material-symbols-outlined">check_circle</span>
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default ExploreEvents;
